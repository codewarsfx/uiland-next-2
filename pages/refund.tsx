import React from 'react';
import styled from 'styled-components'
function Refund() {
	return (
		<>
          <RefundComponent>
    <RefundWrapper>
			<div><h1>Refund Policy</h1></div>
			<p>
				Thanks for subscribing to our services at https://uiland.design operated
				by UiLand. We offer a full money-back guarantee for all purchases made
				on our website. If you are not satisfied with the product that you have
				purchased from us, you can get your money back no questions asked. You
				are eligible for a full reimbursement within 14 calendar days of your
				purchase. After the 14-day period you will no longer be eligible and
				won&apos;t be able to receive a refund. We encourage our customers to try the
				service in the first two weeks after their purchase to ensure it fits
				your needs. If you have any additional questions or would like to
				request a refund, feel free to contact us at design@uiland.design
			</p>
            </RefundWrapper>    
              </RefundComponent>
		</>
	)
}

const RefundComponent=styled.div`
padding-right: 15px;
   padding-left: 15px;
   margin-right: auto;
   margin-left: auto;
       max-width: 864px;


@media (min-width: 992px) {
   
       max-width: 1076px;
   
}

@media only screen and (min-width: 64em) {
   
       max-width: 1140px;
   
} 
`
const RefundWrapper=styled.div`
margin-top:20px;
display:flex;
flex-direction:column;
gap:20px;

justify-content:center;
p{
   font-size:18px;
   font-weight:400;
}
`
export default Refund;
