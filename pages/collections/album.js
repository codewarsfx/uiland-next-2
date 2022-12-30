import React, { useContext,useEffect,useState} from 'react';
import styled from "styled-components";
import Link from 'next/link'
import { UserContext } from "../../context/authContext";
import {queryBookMarkAlbum} from "../../firebase"
import ScreensInCategory from '../../components/ScreensInCategory';

export default function AlbumCollections() {
  const user = useContext(UserContext);
const [screens,setScreens]=useState([])
useEffect(()=>{
async function getAlbums(){
    if(user){
        const data= await queryBookMarkAlbum(user.uid) 
  setScreens(data)   
}
 

}
getAlbums()

},[])

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
      <ScreensInCategory screens={screens} />:<h1>Empty</h1>
      }
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

;

