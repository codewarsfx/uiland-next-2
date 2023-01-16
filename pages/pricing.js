import React, { useContext, useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";

import styled from "styled-components";
import PaystackPayment from "../components/PaystackPayment";
import PriceCard from "../components/PriceCard";
import { UserContext } from "../context/authContext";

export default function Pricing() {
  const user = useContext(UserContext);
  const [isActive, setIsActive] = useState(false);

  const Plan1 = [
    {
      type: "Free",
      price: "0",
      description: "per user/month billed annually",
      title: "For small teams",
      info1: "Real time Contact Syncing",
      info2: "Enhanced email Sending",
      info3: "No seat Limit",
      planId: process.env.NEXT_PUBLIC_PAYSTACK_PLAN_ID_ANNUALY,
    },
    {
      type: "Annual",
      price: "24000",
      description: "per user/month billed annually",
      title: "For small teams",
      info1: "Real time Contact Syncing",
      info2: "Enhanced email Sending",
      info3: "No seat Limit",
      planId: process.env.NEXT_PUBLIC_PAYSTACK_PLAN_ID_ANNUALY,
    },
  ];

  const Plan2 = [
    {
      type: "Free",
      price: "0",
      description: "per user/month billed bi-annually",
      title: "For small teams",
      info1: "Real time Contact Syncing",
      info2: "Enhanced email Sending",
      info3: "No seat Limit",
      planId: process.env.NEXT_PUBLIC_PAYSTACK_PLAN_ID_BINUALLY,
    },
    {
      type: "Bi-Annual",
      price: "12000",
      description: "per user/month billed bi-annually",
      title: "For small teams",
      info1: "Real time Contact Syncing",
      info2: "Enhanced email Sending",
      info3: "No seat Limit",
      planId: process.env.NEXT_PUBLIC_PAYSTACK_PLAN_ID_BINUALLY,
    },
  ];

  // useEffect(() => {
  //   async function getSubscriptionInfo() {
  //     const data = await fetch("/api/paystackwebhook");
  //     console.log(data);
  //     const result = await data.json();
  //     console.log(result);
  //     console.log("pop");
  //   }
  //   getSubscriptionInfo();
  // }, []);
  
  return (
    <PricingWrapper>
      <section className="pricing-text">
        <h1 className="pricing-text-primary">From Zero to Mastery</h1>
        <p className="pricing-text-sec">
          Designed for every stage of your journey <br />
          Strat today, no credit card required
        </p>
      </section>
      <section className="price-tabs" onClick={() => setIsActive(!isActive)}>
        <button className={`price-btn price-btn--${!isActive ? "active" : ""}`}>
          Annual
        </button>
        <button className={`price-btn price-btn--${isActive ? "active" : ""}`}>
          Bi-Annual
        </button>
      </section>
      <section className="price-cards">
        <section
          className={`price-cards-annual price-card-annual--${
            !isActive ? "active" : ""
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
            isActive ? "active" : ""
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

  .price-btn--active {
    background-color: var(--primary-color);
    color: var(--text-color-light);
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
