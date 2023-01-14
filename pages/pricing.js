import React, { useState } from "react";
import PaystackPayment from "../components/PaystackPayment";
export default function Pricing() {
 
const Plan=[process.env.NEXT_PUBLIC_PAYSTACK_PLAN_ID_BINUALLY,process.env.NEXT_PUBLIC_PAYSTACK_PLAN_ID_ANNUALY]

  return (
    <div>
   
{Plan.map((plan, i) =>{
  return (<PaystackPayment plan={plan}  key={i} />)
})}

    </div>
  );
}
