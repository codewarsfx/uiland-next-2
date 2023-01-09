import React, { useContext, useEffect,useState} from 'react';
import styled from "styled-components";
import Link from 'next/link'
import { UserContext } from "../../context/authContext";
import {getAllSingleBookmarkNames} from "../../supabase"
import { mobileCheck } from '../../utils/isMobile';
 

export default function Collection() {
  const user = useContext(UserContext);
  const [bookmark,setBookmark]=useState([])

  useEffect(() => {
	
	
	
	const isMobile= mobileCheck();
  console.log(isMobile)
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
  <Link href='/collections/album'>
	<AlbumTag>
		<ImageHolder>
					<Link href='/collections/album'>
						<a >Albums</a>
					</Link>
		</ImageHolder>

	</AlbumTag>
	 </Link>

       {bookmark && bookmark.map((name)=>{
	return(
		<>
		
	 <IndividualTag>
	 <ImagesHolder>
		<Link href={`/collections/individual/${name}`}>
				{name}
			</Link>		
			{/* <img src="/assets/img/image-collection.jpg"/> */}
		</ImagesHolder>
	
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

// function getRandomNumber(maxNum){
// 	return Math.floor(Math.random() * maxNum);
//   };
//  function getRandomColor  ()  {
// 	let h = getRandomNumber(360);
// 	return h;
//   };
  
//   let firstColor=getRandomColor();
//   let secondColor=getRandomColor();

const ImageHolder=styled.div`
  height: 290px;

  background: linear-gradient(calc(var(--angle)*1deg),hsl(14deg 73% 62%),hsl(44deg 73% 62%));
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



const ImagesHolder=styled(ImageHolder)`


  background: linear-gradient(calc(var(--angle)*1deg),hsl(14deg 73% 62%),hsl(344deg 73% 62%));


`
const AlbumTag=styled.div`

max-width:100%;
border-radius:7%;
flex:0 0 100%;
display:flex;
overflow:hidden;
flex-direction:column;
position:relative;

@media (min-width: 540px) {
	max-width:49%;
flex:0 0 49%;
}
@media (min-width: 768px) {
	max-width:20%;
flex:0 0 20%;
}
a{
	font-size:20px;
	font-weight:600;
	color:white;
	z-index:99999999;
	padding-left:12px;
	overflow: hidden;
    text-overflow: ellipsis;
}
// &::before{
// 	position:absolute;
// 	display:block;
// 	content:"";
// 	width:100%;
// 	height:100%;
// 	z-index:99;
// 	background-image: linear-gradient(to bottom,#1e1f2100,#0e0f0fcc);
// }

`
const IndividualTag=styled.div`

max-width:100%;
border-radius:7%;
flex:0 0 100%;
overflow:hidden;
display:flex;
position:relative;
flex-direction:column;

@media (min-width: 540px) {
	max-width:49%;
flex:0 0 49%;
}
@media (min-width: 768px) {
	max-width:20%;
flex:0 0 20%;
}
a{
	font-size:20px;
	font-weight:600;
	color:white;
	z-index:99999999;
	overflow: hidden;
    text-overflow: ellipsis;
	padding-left:12px;
}
// &::before{
// 	position:absolute;
// 	display:block;
// 	content:"";
// 	width:100%;
// 	height:100%;
// 	z-index:99;
// 	background-image: linear-gradient(to bottom,#1e1f2100,#0e0f0fcc);
// }
`
const Content=styled.div`
display:flex;
align-items:center;
width:100%;
justify-content:flex-start;
gap:10px;
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

