import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { UserContext } from "../context/authContext";
import { deleteAccount } from "../supabase";
import { buttonTypes } from "../components/uiElements/button";
import { Button } from "../components/uiElements";
export default function Profile() {
  const router = useRouter();
  const user = useContext(UserContext);
  console.log(user);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);
  function handleDelete() {
    deleteAccount(user);
  }

  return (
    <>
      <SingleHeader>
        <>
          <Title>Profile</Title>

          <ProfileContainer>
            {/* gets the displayname */}
            <PhotoWrapper>
              <img
                src={user?.user_metadata.avatar_url}
                referrerPolicy="no-referrer"
                alt={`Avavtar of ${user?.user_metadata.full_name}`}
              />
            </PhotoWrapper>
            <h1>{user?.user_metadata.full_name}</h1>
            <h3>{user?.user_metadata.email}</h3>
            <Button type={buttonTypes.error} onClick={handleDelete}>
              {" "}
              Delete Account
            </Button>
          </ProfileContainer>
        </>
      </SingleHeader>
    </>
  );
}

const PhotoWrapper = styled.div`
  overflow: hidden;
  img {
    border-radius: 100%;
    height: 45px;
    border: 2px solid #c6c9d0;
    width: 45px;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: white;
  gap: 8px;
  border-radius: 12px 20px;
`;
const Title = styled.h1`
  z-index: 99;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;
const SingleHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  gap: 8px;
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
