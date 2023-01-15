import { sendRenderResult } from "next/dist/server/send-payload";
import React, { useContext, useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { motion } from "framer-motion";

import styled from "styled-components";
import PaystackPayment from "../components/PaystackPayment";
import { UserContext } from "../context/authContext";
import Router  from "next/router";
export default function Pricing() {
  const user  = useContext(UserContext)
	const [isActive, setIsActive] = useState(false);

	const Plan = [
		process.env.NEXT_PUBLIC_PAYSTACK_PLAN_ID_BINUALLY,
		process.env.NEXT_PUBLIC_PAYSTACK_PLAN_ID_ANNUALY,
	];


  

useEffect(()=>{
  async function getSubscriptionInfo(){
    const data=await  fetch("/api/paystackwebhook")
    const result= await data.json();
    console.log(sendRenderResult)
  }
  getSubscriptionInfo()

},[])
  return (
      <PricingWrapper>
        <section className='pricing-text'>
          <h1 className='pricing-text-primary'>From Zero to Mastery</h1>
          <p className='pricing-text-sec'>
            Designed for every stage of your journey <br />
            Strat today, no credit card required
          </p>
        </section>
        <section className='price-tabs' onClick={() => setIsActive(!isActive)}>
          <button className={`price-btn price-btn--${!isActive ? "active" : ""}`}>
            Annual
          </button>
          <button className={`price-btn price-btn--${isActive ? "active" : ""}`}>
            Bi-Annual
          </button>
        </section>
        <section className='price-cards'>
          <section
            className={`price-cards-annual price-card-annual--${
              !isActive ? "active" : ""
            }`}
          >
            <div className='price-card'>
              <h3 className='price-card-type'>Free</h3>
              <h1 className='price-card-price'>$0</h1>
              <p className='price-card-description'>
                per user/month billed monthly
              </p>
              <div className='price-card-points'>
                <p className='price-point-title'>For small teams</p>
                <p className='price-card-point'>
                  <span className='price-card-point-icon'>
                    <CheckIcon />
                  </span>
                  Real time Contact Syncing
                </p>
                <p className='price-card-point'>
                  <span class='price-card-point-icon'>
                    <CheckIcon />
                  </span>{" "}
                  Enhanced email Sending
                </p>
                <p className='price-card-point'>
                  <span class='price-card-point-icon'>
                    <CheckIcon />
                  </span>{" "}
                  No seat Limit
                </p>
                <PaystackPayment plan={Plan[0]}/>
              </div>
            </div>
            <div className='price-card'>
              <h3 className='price-card-type'>Annual</h3>
              <h1 className='price-card-price'>$100</h1>
              <p className='price-card-description'>
                per user/month billed monthly
              </p>
              <div className='price-card-points'>
                <p className='price-point-title'>For small teams</p>
                <p className='price-card-point'>
                  <span className='price-card-point-icon'>
                    <CheckIcon />
                  </span>
                  Real time Contact Syncing
                </p>
                <p className='price-card-point'>
                  <span class='price-card-point-icon'>
                    <CheckIcon />
                  </span>{" "}
                  Enhanced email Sending
                </p>
                <p className='price-card-point'>
                  <span class='price-card-point-icon'>
                    <CheckIcon />
                  </span>{" "}
                  No seat Limit
                </p>
                <PaystackPayment plan={Plan[1]} />
              </div>
            </div>
          </section>
          <section
            className={`price-cards-annual price-card-annual--${
              isActive ? "active" : ""
            }`}
          >
            <div className='price-card'>
              <h3 className='price-card-type'>Free</h3>
              <h1 className='price-card-price'>$0</h1>
              <p className='price-card-description'>
                per user/month billed biannually
              </p>
              <div className='price-card-points'>
                <p className='price-point-title'>For Large teams</p>
                <p className='price-card-point'>
                  <span className='price-card-point-icon'>
                    <CheckIcon />
                  </span>
                  Real time Contact Syncing
                </p>
                <p className='price-card-point'>
                  <span class='price-card-point-icon'>
                    <CheckIcon />
                  </span>{" "}
                  Enhanced email Sending
                </p>
                <p className='price-card-point'>
                  <span class='price-card-point-icon'>
                    <CheckIcon />
                  </span>{" "}
                  No seat Limit
                </p>
                <PaystackPayment plan={Plan[0]}/>
              </div>
            </div>
            <div className='price-card'>
              <h3 className='price-card-type'>Bi-Annual</h3>
              <h1 className='price-card-price'>$200</h1>
              <p className='price-card-description'>
                per user/year billed biannually
              </p>
              <div className='price-card-points'>
                <p className='price-point-title'>For Large teams</p>
                <p className='price-card-point'>
                  <span className='price-card-point-icon'>
                    <CheckIcon />
                  </span>
                  Real time Contact Syncing
                </p>
                <p className='price-card-point'>
                  <span className='price-card-point-icon'>
                    <CheckIcon />
                  </span>{" "}
                  Enhanced email Sending
                </p>
                <p className='price-card-point'>
                  <span className='price-card-point-icon'>
                    <CheckIcon />
                  </span>{" "}
                  No seat Limit
                </p>
                <PaystackPayment plan={Plan[1]}/>
              </div>
            </div>
          </section>
        </section>
      </PricingWrapper>
    );

}

const CheckIcon = styled(BsCheck)`
	color: #bbb;
	font-weight: 600;
`;

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

	.price-btn--active {
		background-color: var(--primary-color);
		color: var(--text-color-light);
	}

	.price-card {
		border: 0.5px solid #ddd;
		padding: 2em;
		cursor: pointer;
		border-radius: 1em;
		width: 90%;
		max-width: 320px;
		margin: 1em auto;
		color: var(--text-color-dark);
		font-weight: 500;
		box-shadow: 0.1px 0.1px 5px #eee;
		transition: all 0.2s ease;

		:hover {
			background-color: var(--primary-color);
			color: #fff;
			box-shadow: 0.1px 0.1px 10px #ddd;

			.price-card-description {
				color: #fff;
			}

			.price-card-point-icon {
				background-color: #fff;
			}
		}
	}

	.price-card-type {
		font-size: 18px;
		font-weight: 600;
	}

	.price-card-price {
		font-size: 36px;
		margin: 0.2em 0;
	}

	.price-card-description {
		font-size: 12px;
		color: #777;
		margin: 0;
		font-weight: 600;
	}
	.price-card-points {
		margin: 1em 0;
	}

	.price-point-title {
		font-size: 18px;
		margin: 1.5em 0 0;
	}
	.price-card-point {
		display: flex;
		align-items: center;
		font-size: 18px;
		margin: 1em 0;
	}

	.price-card-point-icon {
		width: 25px;
		height: 25px;
		border-radius: 0.4em;
		border: 1px solid #ccc;
		display: inline-flex;
		background-color: #eee;
		margin-right: 0.5em;
		justify-content: center;
		align-items: center;
	}

	.price-cards {
		position: relative;
	}

	.price-cards-annual {
		position: absolute;
    display: none;
		width: 100%;
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









// {/* {Plan.map((plan, i) =>{
//   return (<PaystackPayment plan={plan}  key={i} />)
// })} */}
