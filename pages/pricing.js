import { sendRenderResult } from "next/dist/server/send-payload";
import React, { useEffect, useState } from "react";
import PaystackPayment from "../components/PaystackPayment";
export default function Pricing() {
 
const Plan=[process.env.NEXT_PUBLIC_PAYSTACK_PLAN_ID_BINUALLY,process.env.NEXT_PUBLIC_PAYSTACK_PLAN_ID_ANNUALY]



useEffect(()=>{
  async function getSubscriptionInfo(){
    const data=await  fetch("/api/paystackwebhook")
    const result= await data.json();
    console.log(sendRenderResult)
  }
  getSubscriptionInfo()

},[])
  return (
    <div>
   
{Plan.map((plan, i) =>{
  return (<PaystackPayment plan={plan}  key={i} />)
})}

    </div>
  );
}
