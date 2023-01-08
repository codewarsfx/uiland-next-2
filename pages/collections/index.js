import React, { useContext, useEffect,useState} from 'react';
import styled from "styled-components";
import Link from 'next/link'
import { UserContext } from "../../context/authContext";
import {getAllSingleBookmarkNames} from "../../supabase"

export default function Collection() {
  const user = useContext(UserContext);
  const [bookmark,setBookmark]=useState([])
  useEffect(() => {
    const allBookmarkNames = async () => {
      const data = await getAllSingleBookmarkNames();
      setBookmark(data);
    };
    allBookmarkNames();
  }, []);
  return (
    <>
       
             <SingleHeader>
  <TitleBackground>
	   <Title>Collections</Title>
  </TitleBackground>
  
  <Content>
	<AlbumTag>
		<ImageHolder>
					<Link href='/collections/album'>
						<a >Albums</a>
					</Link>
		</ImageHolder>

	</AlbumTag>
	 

       {bookmark.map((name)=>{
	return(
		<>
	 <IndividualTag>
	 <ImageHolder>
			<img src="/assets/img/image-collection.jpg"/>
		</ImageHolder>
		<Link href={`/collections/individual/${name}`}>
				{name}
			</Link>
	 </IndividualTag>
		</>
	)
 })}    
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
  height: 290px;
  background: linear-gradient(calc(var(--angle)*1deg),var(--col1),var(--col2));
  display:flex;
  align-items:flex-end;
  justify-content:end;
  width: 100%;
    padding: 12px;
// img{
// 	width: 100%;
//     object-fit: cover;
  
// }
`
const AlbumTag=styled.div`

max-width:20%;
border-radius:7%;
flex:0 0 20%;
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

max-width:20%;
border-radius:7%;
flex:0 0 20%;
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
width:100%;
gap:30px;
flex-wrap:wrap;
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

