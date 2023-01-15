import React from 'react'
import { BsCheck } from "react-icons/bs";

import styled from "styled-components";
import PaystackPayment from "../PaystackPayment";

function PriceCard({type, price,description,title,info1,info2,info3,planId}) {
  return (
    <>
       <PriceCards>
              <h3 className='price-card-type'>{type}</h3>
              <h1 className='price-card-price'>₦{price}</h1>
              <p className='price-card-description'>
                {description}
              </p>
              <div className='price-card-points'>
                <p className='price-point-title'>{title}</p>
                <p className='price-card-point'>
                  <span className='price-card-point-icon'>
                    <CheckIcon />
                  </span>
                  {info1}
                </p>
                <p className='price-card-point'>
                  <span class='price-card-point-icon'>
                    <CheckIcon />
                  </span>{" "}
                  {info2}
                </p>
                <p className='price-card-point'>
                  <span class='price-card-point-icon'>
                    <CheckIcon />
                  </span>{" "}
                  {info3}
                </p>
                <PaystackPayment plan={planId}/>
              </div>
            </PriceCards>
    
    
    </>
  )
}
const CheckIcon = styled(BsCheck)`
	color: #bbb;
	font-weight: 600;
`;

const PriceCards=styled.div`
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
`


export default PriceCard