import React, { useContext} from 'react';
import styled from "styled-components";
import { UserContext } from "../context/authContext";
import {deleteAccount} from "../firebase"
import { supabase } from '../supabase';
export default function Profile() {
  const user = useContext(UserContext);
console.log(user)

function handleDelete(){
  deleteAccount(user.id)
}
  return (
    <>
    
             <SingleHeader>

    <>
  
     <Title>Profile</Title>
    
   <ProfileContainer>
    {/* gets the displayname */}
    <PhotoWrapper>
      <img src={user?.user_metadata.avatar_url} referrerPolicy="no-referrer"/>
    </PhotoWrapper>
<h1>{ user?.user_metadata.full_name}</h1>
<h3>{user?.user_metadata.email}</h3>
<button className='album-card__buttoncopy' onClick={handleDelete}>Delete Account</button>
   </ProfileContainer>
   
     </>

	  </SingleHeader>
      </>
  );
   
};
const Button=styled.button`

`
const PhotoWrapper=styled.div`
overflow:hidden;
img{
	border-radius: 100%;
	height: 45px;
}
`
const ProfileContainer =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:12px;
background:white;
border-radius:12px 20px;
`
const Title = styled.h1`
	z-index:99;
	font-size:24px;
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

// export const getServerSideProps=async({req})=>{
//   const {user} = await supabase.auth.api.getUserByCookie(req)

//   if(!user){
//     return{
//       redirect:{
//         permanent:false,
//         destination:"/"
//       },
//       props:{},
//     }
//   }
//   return{
//     props:{}
//   }
// }