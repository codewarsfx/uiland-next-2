import React, { useContext} from 'react';
import styled from "styled-components";
import { UserContext } from "../context/authContext";

export default function Profile() {
  const user = useContext(UserContext);
console.log(user)
  return (
    <>
    
             <SingleHeader>

    <>
  
     <Title>Profile</Title>
    
   <div>
    {/* gets the displayname */}
<h1>{user && user.displayName}</h1>
   </div>
     </>

	  </SingleHeader>
 <ElementsInCategoryContainer>
	
		
			
		</ElementsInCategoryContainer>
      </>
  );
   
};



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

const DownloadWrapper = styled.div`
position:absolute;
  block:"";
  z-index: 99;
  display:flex;
  flex-direction:column;
  padding: 7px 16px;
  align-items: flex-start;
  top:0;
  left:50%;
  right:50%;
  border-radius:2em;
  background:rgba(0, 0, 0, 0.17);
  visibility:hidden;

`
const AbsoluteBox = styled.div`
	position:absolute;
  block:"";
  z-index: 99;
  display:flex;
  flex-direction:column;
  padding: 7px 16px;
  align-items: flex-start;
  top:0;
  left:0;
  border-radius:2em;
  background:rgba(0, 0, 0, 0.17);
  visibility:hidden;
`;
const ScreenshotContainer= styled.div`
border-radius: 0.8em;
background-color: var(--light-grey-color);
    position:relative;
	cursor:pointer;
	&:hover .target {
		visibility:visible;
	   }
`
const TitleBox = styled.div`
z-index:99;
border-radius:25px;
	 display:flex;
	 flex-direction:row;
	 gap:8px;
	 justify-content:space-between;
	 align-items:center
	background: rgba(25,25,25,.8);
    border-color: transparent;
	backdrop-filter: blur(65px);
	color:white;
	// padding:10px 12px;
}
img{
	height:15px !important;
	fill: #fff;
  }

`;
const Wrapper = styled.div`
	background:var(--primary-color)
`;

const ImageWrapper = styled.div`
	position:relative;
  overflow:hidden;
`;



const WebLink = styled.a`
	font-weight:200;
  font-size:1.3rem;
  text-decoration:none;
  color:var(--primary-color);

`;
const ElementsInCategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(281px, 1fr));
	margin: 1.5em auto;
	gap: 10px;
	width: 90%;

	@media (min-width: 768px) {
		width: 95%;
		margin: 3em auto;
		gap: 20px;
	}
`;
;

