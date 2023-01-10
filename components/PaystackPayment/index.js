import React, { useEffect ,useState} from "react"
import { PaystackButton } from "react-paystack"


const PaystackPayment = ({amount,email,phone,name,handlePaymentName,handlePaymentEmail,handlePaymentPhone}) => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_TEST_KEY
  
  const[url,setUrl]=useState("")
   // you can call this function anything

    /**
 * @description returns the data to input state
 * @param {Object}  returns object after success message
 * @param {String} 
 * @returns {Object}
 * 
 * {
    "reference": "Q23457987777",
    "trans": "5676788899990",
    "status": "success",
    "message": "Approved",
    "transaction": "5676788899990",
    "trxref": "Q23457987777",
    "fallback": false,
    "bank": "UNITED BANK FOR AFRICA",
    "return": "{\"redirecturl\":\"?trxref=Q23457987777&reference=Q23457987777\",\"trans\":\"5676788899990\",\"trxref\":\"Q23457987777\",\"reference\":\"Q23457987777\",\"status\":\"success\",\"message\":\"Success\",\"response\":\"Approved\",\"fallback\":false,\"bank\":\"UNITED BANK FOR AFRICA\"}",
    "redirecturl": "?trxref=Q23457987777&reference=Q23457987777"
}
 */
   const handlePaystackSuccessAction = (response) => {
    // Implementation for whatever you want to do with response and after success call.
    console.log(response);
    setUrl(response.reference)
    
  };

  useEffect(()=>{
    async function getReference(){
      	const download =await fetch("/api/paystackwebhook");
        const data = await download.json();
        console.log(data);
    }
    getReference()

  },[])


  console.log(url)
  useEffect(()=>{
    async function getReference(){
      	const download =await fetch("/api/paystack",
	{method:"POST",headers:{
		"Content-Type":"application/json"
	},body:JSON.stringify(url)}
	);
  
      const data = await download.json();
      console.log(data);
    }
    getReference()

  },[url])

  const componentProps = {
    email,
    plan: "PLN_81vp6df7zltstm1" ,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <div className="item-details">
            <p>Upgrade</p>
            <p>{amount}</p>
          </div>
        </div>
        <div className="checkout-form">
          <form>
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={handlePaymentName}
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={handlePaymentEmail}
            />
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={handlePaymentPhone}
            />
          </form>
          <PaystackButton {...componentProps} />
        </div>
      </div>
    </div>
  )
}

export default PaystackPayment;