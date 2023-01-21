import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { PaystackButton } from 'react-paystack';
import { UserContext } from '../../context/authContext';
import styled from 'styled-components';

const PaystackPayment = ({ plan }) => {
	const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_TEST_KEY;
	const user = useContext(UserContext);
	const [url, setUrl] = useState('');
	const router = useRouter();

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

	const handlePaystackSuccessAction=(response:{reference:""})=> {
		// Implementation for whatever you want to do with response and after success call.
		console.log(response)
		setUrl(response.reference);
		
	}
	useEffect(() => {
		async function getReference() {
			const download = await fetch('/api/paystack', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(url),
			});

			const data = await download.json();

			//prevents it from immediately redirecting back to home
			if (data.message === 'Verification successful') {
				setTimeout(() => {
					router.push('/');
				}, 200);
			}
		}
		getReference();
	}, [router, url]);

	//fix to enable Supabase user
	const componentProps = {
		email: user?.user_metadata.email,
		plan: plan, //process.env.NEXT_PUBLIC_PAYSTACK_PLAN_ID_BINUALLY
		amount:0,
		publicKey,
		text: 'Get Started',
		onSuccess: (response: {reference:""}) => handlePaystackSuccessAction(response),
		onClose: () => alert("Wait! Don't leave :("),
	};

	return (
		<div className='App'>
			<div className='container'>
				<div className='item'></div>
				<div className='checkout-form'>
					<PaymentCta {...componentProps} />
				</div>
			</div>
		</div>
	);
};

const PaymentCta = styled(PaystackButton)`
	width: 100%;
	font-size: 16px;
	padding: 0.8em 0;
	border: 1px solid #aaa;
	background-color: #fff;
	border-radius: 0.5em;
	margin-top: 1em;
	cursor: pointer;
`;

export default PaystackPayment;
