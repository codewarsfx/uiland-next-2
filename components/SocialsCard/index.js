import Image from 'next/image';
import React from 'react'
import styled from "styled-components";
function SocialsCard({id,copy,name}) {
  return (
    <>
       <div className="flex-row">


 

<SocialBox>
     <a
    className="font_medium"
    target="_blank"
    rel="noopener noreferrer"
    href={`https://twitter.com/intent/tweet?text=${id}`}
  >
    <Image width="52" height="52" src="/assets/img/twitter.svg" alt="Share on twitter" />
  </a>
  {" "}
  {/* <a
    className="font_medium"
    target="_blank"
    rel="noopener noreferrer"
    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://uiland.design/screens/${id}`}
  >
    <svg
      xmlns="https://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <path
        fill="#0078d4"
        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
      ></path>
      <path
        d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
        opacity=".05"
      ></path>
      <path
        d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
        opacity=".07"
      ></path>
      <path
        fill="#fff"
        d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
      ></path>
    </svg>
  </a> */}
  <a
    href={`https://wa.me/?text=https://uiland.design/screens/${name}/screens/${id}`}
    target="_blank"
    rel="noreferrer"
  >
    <Image src="/assets/img/whatsapp.svg" width="52" height="52" alt="Share on WhatsApp" />
  </a>
  <a
    href={`https://telegram.me/share/url?url=https://uiland.design/screens/${name}/screens/${id}`}
    target="_blank"
    rel="noreferrer"
  >
    <Image width="52" height="52" src="/assets/img/telegram.svg" alt="Share on Telegram" />
  </a>
  <a
    href={`https://www.facebook.com/sharer/sharer.php?quote=https://uiland.design/screens/${name}/screens/${id}`}
    target="_blank"
    rel="noreferrer"
  >
    <Image width="52" height="52" src="/assets/img/facebook.svg" alt="Share on Facebook" />
  </a>
</SocialBox>

</div>
<CopyContainer>
<CopyText>
{`https://uiland.design/screens/${name}/screens/${id}`}
</CopyText>
<CopyButton onClick={copy}>
    Copy
</CopyButton>
</CopyContainer>
    </>
  )
}

const SocialBox=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
gap:8px;
`
const CopyContainer=styled.div`
border-radius:12px;
gap: 16px;
margin-top:20px;
padding:6px;
width:100%;
background:#dddddd;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;

`

const CopyText=styled.div`
overflow: hidden;
text-overflow: ellipsis;

`

const CopyButton=styled.div`
display: -webkit-inline-box;
display: -webkit-inline-flex;
display: -ms-inline-flexbox;
display: flex;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
padding: 1rem;
border: none;
border-radius: 50px;
outline: none;
color: white;
height: 40px;
font-size: 1rem;
font-weight: 500;
background-color: #1b47e5;
cursor: pointer;

`

export default SocialsCard