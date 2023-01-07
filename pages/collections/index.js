import React, { useContext} from 'react';
import styled from "styled-components";
import Link from 'next/link'
import { UserContext } from "../../context/authContext";
import Header from '../../components/Header';


export default function Collection() {
  const user = useContext(UserContext);
  return (
    <>
       
             <SingleHeader>
  <TitleBackground>
	   <Title>Collections</Title>
  </TitleBackground>
  
  <Content>
	<AlbumTag>
		<ImageHolder>
			<img src="/assets/img/image-collections2.jpg"/>
		</ImageHolder>
		<Link href='/collections/album'>
						<a >Albums</a>
					</Link>
	</AlbumTag>
	 
	 <IndividualTag>
	 <ImageHolder>
			<img src="/assets/img/image-collection.jpg"/>
		</ImageHolder>
		<Link href='/collections/individual'>
						<a >Individual screens</a>
					</Link>
	 </IndividualTag>
          
  </Content>
    

	  </SingleHeader>
    <ElementsInCategoryContainer> 
 

      </ElementsInCategoryContainer ></>
  );
   
};

const Wrapper = styled.div`
	background:var(--primary-color)
`;
const ImageHolder=styled.div`

img{
	width: 100%;
    object-fit: cover;
    height: 400px;
}
`
const AlbumTag=styled.div`

max-width:50%;
flex:0 0 50%;
display:flex;
overflow:hidden;
flex-direction:column;
position:relative;
a{
	font-size:20px;
	font-weight:600;
	color:white;
	z-index:99999999;
	padding-left:12px;
}
&::before{
	position:absolute;
	display:block;
	content:"";
	width:100%;
	height:100%;
	z-index:99;
	background-image: linear-gradient(to bottom,#1e1f2100,#0e0f0fcc);
}

`
const IndividualTag=styled.div`

max-width:50%;
flex:0 0 50%;
overflow:hidden;
display:flex;
position:relative;
flex-direction:column;
a{
	font-size:20px;
	font-weight:600;
	color:white;
	z-index:99999999;
	padding-left:12px;
}
&::before{
	position:absolute;
	display:block;
	content:"";
	width:100%;
	height:100%;
	z-index:99;
	background-image: linear-gradient(to bottom,#1e1f2100,#0e0f0fcc);
}
`
const Content=styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:30px;
`
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

