import React, { useContext,useEffect,useState} from 'react';
import styled from "styled-components";
import Link from 'next/link'
import Image from "next/image"
import {useRouter} from "next/router"
import { UserContext } from "../../../context/authContext";
import {viewSingleBookmark} from "../../../supabase"

export default function IndividualCollections() {
  const router = useRouter()
  const user = useContext(UserContext);
const [screens,setScreens]=useState([])
const [displayBasic, setDisplayBasic] = useState(false);
const[imageContent,setImageContent] = useState({})
const[getId,setGetId]= useState([])


useEffect(()=>{

async function getAlbums(){
    
    if(user){
        const data= await viewSingleBookmark(router.query.name) 
        console.log(data)
  setScreens(data)   
}
}
getAlbums()

},[ router.query.name, user])

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
  
     <Title>{router.query.name}</Title>
    
   <div>

   </div>
     </>

	  </SingleHeader>
      <ElementsInCategoryContainer>
     {screens?
     	screens?.map((data) => (
			<ScreenshotContainer key={data.url}>

			 
       <Image src={data.screen_id.url}     alt={`Screenshots of  App`} width={1080} height={2240} />
			</ScreenshotContainer>
			
			))
     : <p>Empty</p>} 
	
		
			
		</ElementsInCategoryContainer>
      </>
  );
   
};
const ModalBox = styled.div`
  background-color: #fff;
  max-width: 37.5rem;
  padding: 1.6rem;
  border-radius: 0.5rem;
`;

const DownloadWrapper = styled.div`
  position: absolute;
  block: "";
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 7px 16px;
  align-items: flex-start;
  top: 10px;
  right: 94px;
  border-radius: 2em;
  visibility: hidden;
`;
const CopyWrapper = styled.div`
  position: absolute;
  block: "";
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 7px 16px;
  align-items: flex-start;
  top: 10px;
  right: 18px;
  border-radius: 2em;
  visibility: hidden;
`;

const AbsoluteBox = styled.div`
  position: absolute;
  block: "";
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 7px 16px;
  align-items: flex-start;
  top: 10px;
  right: 54px;
  border-radius: 2em;
  visibility: hidden;
`;
const ScreenshotContainer = styled.div`
  border-radius: 0.8em;
  background: linear-gradient(to bottom, white 99%, black 1%);
  overflow: auto;
  border: 1px solid #dce0f1;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  user-select: none;
  &:hover .target {
    visibility: visible;
  }
  img {
    pointer-events: none;
  }
`;

const Title = styled.h1`
  z-index: 99;
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  padding: 5px;
  position: absolute;
  block: "";
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.17);
  z-index: 99;
  top: 0;
  right: 0;
  visibility: hidden;
  svg {
    width: 23px;
    height: 23px;
    vertical-align: middle;
  }
  img {
    height: 20px;
    width: 20px;
    transition: all 0.5s ease-out;
  }
`;
const SingleHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  gap: 8px;
`;

const WebLink = styled.a`
  font-weight: 200;
  font-size: 1.3rem;
  text-decoration: none;
  color: var(--primary-color);
`;
const ElementsInCategoryContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 1.5em auto;
  gap: 20px;
  width: 90%;
  @media (min-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    width: 95%;
    margin: 3em auto;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }
`;
