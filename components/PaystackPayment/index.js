import React, { useEffect ,useState,useContext} from "react";
import { useRouter } from "react-router-dom";
import { PaystackButton } from "react-paystack"
import { UserContext } from "../../context/authContext";



const PaystackPayment = ({plan}) => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_TEST_KEY
  const user = useContext(UserContext);
  const[url,setUrl]=useState("")
  const router=useRouter();


    /**
 * @description returns the data to input state
 * @param {Object}  returns object after success message
 * @param {String} 
 * @returns {None} returns none
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

   
function handlePaystackSuccessAction (response) {
  // Implementation for whatever you want to do with response and after success call.
  console.log(response);
  setUrl(response.reference)
  
};
  useEffect(()=>{
    async function getReference(){
      	const download =await fetch("/api/paystack",
	{method:"POST",headers:{
		"Content-Type":"application/json"
	},body:JSON.stringify(url)}
	);
  
      const data = await download.json();
      console.log(data);
      if(data){
        router.push("/")
      }
    }
    getReference()

  },[router, url])

  //fix to enable Supabase user
  const componentProps = {
    email:user?.user_metadata.email,
    plan: plan ,//process.env.NEXT_PUBLIC_PAYSTACK_PLAN_ID_BINUALLY
    metadata: {
      name:user?.user_metadata.full_name,
      phone:"",
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
      
        </div>
        <div className="checkout-form">
          <PaystackButton {...componentProps} />
        </div>
      </div>
    </div>
  )
}

export default PaystackPayment;