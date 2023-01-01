import React, { useContext,useEffect,useState} from 'react';
import styled from "styled-components";
import Link from 'next/link'
import Image from "next/image"
import { UserContext } from "../../context/authContext";
import {queryBookMarkIndividual} from "../../firebase"

export default function IndividualCollections() {
  const user = useContext(UserContext);
const [screens,setScreens]=useState([])
const [displayBasic, setDisplayBasic] = useState(false);
const[imageContent,setImageContent] = useState({})
const[getId,setGetId]= useState([])
useEffect(()=>{
async function getAlbums(){
    if(user){
        const data= await queryBookMarkIndividual(user.uid) 
  setScreens(data)   
}
}
getAlbums()

},[user])

async function deleteIndividualBookmark(data){
	await deleteBookmarkSelected(user,  data)
}

async function bookmark(data){
	setDisplayBasic(true);
	setImageContent(data)
}
//download images
const  downloadImage =  async(e)=>{
    console.log(e.target.parentElement.parentElement.children[3].children[1].currentSrc)
    const image = await fetch(e.target.parentElement.parentElement.children[3].children[1].currentSrc)
    console.log(image)
    const imageBlog = await image.blob()
    console.log(imageBlog)
    const imageURL = URL.createObjectURL(imageBlog)
    
    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'image file name here'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    }
    

    //copy images
    async function copyImage(e){
            const response =  await fetch(e.target.parentElement.children[3].children[1].currentSrc);
            const blob = await response.blob();
             navigator.clipboard.write([
             
              new window.ClipboardItem({
                [blob.type]: blob
              })
            ]);
            console.log('Image copied.');
    }
  return (
    <>
    
             <SingleHeader>

    <>
  
     <Title>Collections</Title>
    
   <div>

   </div>
     </>

	  </SingleHeader>
     {screens?
     	screens?.map((data) => (
			<ScreenshotContainer key={data.url}>
	
		<AbsoluteBox className="target"  onClick={(e)=>downloadImage(e)}>
			<Image src='/assets/img/save.svg' width={30} height={30} alt='download' /><Title className="target" >Download</Title></AbsoluteBox>
			
            {/* Todo: break into components */}
            {getId.includes(data.id)?
			<DownloadWrapper className="target"  onClick={()=>bookmark(data)}>
			<Image src='/assets/img/save.svg' width={30} height={30} alt='delete' /><Title className="target" >Delete</Title>
			</DownloadWrapper>:
			<DownloadWrapper className="target"  onClick={()=>deleteIndividualBookmark(data)}>
			<Image src='/assets/img/save.svg' width={30} height={30} alt='save' /><Title className="target" >Save</Title>
			</DownloadWrapper>
		}
			 <Title className="target" onClick={(e)=>copyImage(e)}>Copy Image</Title>
			 
       <Image src={data.url} alt="imageSelected" width={1080} height={2240} />
			</ScreenshotContainer>
			
			))
     : <h1>Empty</h1>} <ElementsInCategoryContainer>
	
		
			
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

