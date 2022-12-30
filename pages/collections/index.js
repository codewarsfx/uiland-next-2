import React, { useContext} from 'react';
import styled from "styled-components";
import Link from 'next/link'
import { UserContext } from "../../context/authContext";


export default function Collection() {
  const user = useContext(UserContext);
  return (
    <>
    
             <SingleHeader>

    <>
  
     <Title>Collections</Title>
     <Link href='/collections/album'>
						<a >Albums</a>
					</Link>
          <Link href='/collections/individual'>
						<a >Individual screens</a>
					</Link>
     </>

	  </SingleHeader>
    <ElementsInCategoryContainer> 
 

      </ElementsInCategoryContainer ></>
  );
   
};
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
	font-size:12px;
	font-weight:300;
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

