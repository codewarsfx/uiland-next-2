import React, { useContext, useEffect, useState } from 'react';
import { BsCheck } from 'react-icons/bs';

import styled from 'styled-components';
import PaystackPayment from '../components/PaystackPayment';
import PriceCard from '../components/PriceCard';
import { UserContext } from '../context/authContext';

export default function Pricing() {
	const user = useContext(UserContext);
	const [isActive, setIsActive] = useState(false);

	const Plan1 = [
		{
			type: 'Free',
			price: '0',
			description: 'per user/month billed annually',
			title: 'For small teams',
			info1: 'Browse 	30	 Screens Per Company',
			info2: 'Unlimited Filter and Search results',
			info3: 'Unlimited Collections',
			planId: '',
		},
		{
			type: 'Annual',
			price: '22000',
			description: 'per user/month billed annually',
			title: 'For small teams',
			info1: 'Browse All Screens Per Company',
			info2: 'Unlimited Filter and Search results',
			info3: 'Unlimited Collections',
			planId: process.env.NEXT_PUBLIC_PAYSTACK_PLAN_ID_ANNUALY,
		},
	];

	const Plan2 = [
		{
			type: 'Free',
			price: '0',
			description: 'per user/month billed bi-annually',
			title: 'For small teams',
			info1: 'Browse 	30	 Screens Per Company',
			info2: 'Unlimited Filter and Search results',
			info3: 'Unlimited Collections',
			planId: '',
		},
		{
			type: 'Bi-Annual',
			price: '12000',
			description: 'per user/month billed bi-annually',
			title: 'For small teams',
			info1: 'Browse All Screens Per Company',
			info2: 'Unlimited Filter and Search results',
			info3: 'Unlimited Collections',
			planId: process.env.NEXT_PUBLIC_PAYSTACK_PLAN_ID_BINUALLY,
		},
	];

	useEffect(() => {
		async function getSubscriptionInfo() {
			const data = await fetch('/api/paystackwebhook');

			const result = await data.json();
		}

		getSubscriptionInfo();
	}, []);

	return (
		<PricingWrapper>
			<section className='pricing-text'>
				<h1 className='pricing-text-primary'>Get Inspired by UI designs</h1>
				<p className='pricing-text-sec'>
					Designed to make your design journey easier <br />
					Start today
				</p>
			</section>
			<section className='price-tabs' onClick={() => setIsActive(!isActive)}>
				<button className={`price-btn price-btn--${!isActive ? 'active' : ''}`}>
					Annual
				</button>
				<button className={`price-btn price-btn--${isActive ? 'active' : ''}`}>
					Bi-Annual
				</button>
			</section>
			<section className='pricing-text pricing-text--description'>
				<h3>
					For subscribers outside Nigeria , please check the{' '}
					<a
						href='https://www.cbn.gov.ng/rates/ExchRateByCurrency.asp'
						style={{ textDecoration: 'underline', textAlign: 'center' }}
					>
						Official Central Bank of Nigeria Exchange Rates
					</a>
				</h3>
			</section>
			<section className='price-cards'>
				<section
					className={`price-cards-annual price-card-annual--${
						!isActive ? 'active' : ''
					}`}
				>
					{Plan1.map((items, id) => {
						return (
							<PriceCard
								key={id}
								type={items.type}
								price={items.price}
								description={items.description}
								title={items.title}
								info1={items.info1}
								info2={items.info2}
								info3={items.info3}
								planId={items.planId}
							/>
						);
					})}
				</section>
				<section
					className={`price-cards-annual price-card-annual--${
						isActive ? 'active' : ''
					}`}
				>
					{Plan2.map((items, id) => {
						return (
							<PriceCard
								key={id}
								type={items.type}
								price={items.price}
								description={items.description}
								title={items.title}
								info1={items.info1}
								info2={items.info2}
								info3={items.info3}
								planId={items.planId}
							/>
						);
					})}
				</section>
			</section>
		</PricingWrapper>
	);
}

const PricingWrapper = styled.div`
	width: 90%;
	margin: 3em auto 3em;

	.pricing-text-primary {
		font-size: 30px;
		font-weight: bold;
		text-align: center;
		color: var(--text-color-dark);
		margin: 0;
		@media (min-width: 760px) {
			font-size: 48px;
		}
	}

	.pricing-text-sec {
		font-size: 16px;
		color: var(--text-color-dark-secondary);
		line-height: 1.5;
		text-align: center;
		margin: 0.5em;
		@media (min-width: 760px) {
			font-size: 20px;
		}
	}

	.price-tabs {
		margin: 2em auto;
		border-radius: 0.5em;
		border: 1px solid #ddd;
		display: flex;
		width: 235px;
		justify-content: space-between;
	}

	.price-btn {
		color: #666;
		border: none;
		padding: 0.9em 2.1em;
		margin: 0;
		font-size: 14px;
		background-color: inherit;
		border-radius: 0.5em;
		cursor: pointer;
		transition: all 0.2s ease;
	}
	.pricing-text--description {
		font-size: 18px;
		text-align: center;
		margin-bottom: 2em;
	}

	.price-btn--active {
		background-color: var(--primary-color);
		color: var(--text-color-light);
	}

	.price-cards-annual {
		position: absolute;
		display: none;
		width: 90%;
		@media (min-width: 760px) {
			max-width: 700px;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	.price-card-annual--active {
		display: block;
		@media (min-width: 760px) {
			display: flex;
		}
	}
`;
