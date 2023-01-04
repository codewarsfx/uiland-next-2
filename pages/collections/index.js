import React, { useContext} from 'react';
import styled from "styled-components";
import Link from 'next/link'
import { UserContext } from "../../context/authContext";


export default function Collection() {
  const user = useContext(UserContext);
  return (
    <>
    
             <SingleHeader>
  <TitleBackground>
	   <Title>Collections</Title>
  </TitleBackground>
  
     <Link href='/collections/album'>
						<a >Albums</a>
					</Link>
          <Link href='/collections/individual'>
						<a >Individual screens</a>
					</Link>

	  </SingleHeader>
    <ElementsInCategoryContainer> 
 

      </ElementsInCategoryContainer ></>
  );
   
};
const TitleBackground=styled.div`
align-items: flex-end;
padding:12px;
display:flex;
 width:100%;
 background-image:linear-gradient(to bottom,#1e1f2100,#0e0f0f),url("/assets/img/collection-background.jpg") ;
 height: 60vh;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
`
const ElementsInCategoryContainer = styled.div`
	display: grid;
    grid-template-columns: repeat(auto-fit,minmax(239px,1fr));
	margin: 1.5em auto;
	gap: 10px;
	width: 90%;

	@media (min-width: 768px) {
		width: 95%;
		margin: 3em auto;
		gap: 20px;
	}
`;


const Title = styled.h1`
	z-index:99;
	font-size:36px;
	color:white;
	font-weight:600;
	margin:0;
	padding:0;
`;
const SingleHeader = styled.div`
	display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:15px;
  gap:8px;

`;

;

