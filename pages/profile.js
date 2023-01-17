import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { UserContext } from '../context/authContext';
import { deleteAccount, getUserProfile } from '../supabase';
import { buttonTypes } from '../components/uiElements/button';
import { Button } from '../components/uiElements';
export default function Profile() {
	const [userprofile, setUserProfile] = useState([]);
	const router = useRouter();
	const user = useContext(UserContext);
	console.log(user);

	useEffect(() => {
		if (!user) {
			router.push('/');
		}
	}, [router, user]);
	function handleDelete() {
		deleteAccount(user);
		router.push('/');
	}
	useEffect(() => {
		async function getProfile() {
			if (user || user?.id) {
				console.log(user);
				const userDetails = await getUserProfile(user);
				setUserProfile(userDetails);
			}
		}
		getProfile();
	}, [user]);

	//response from the backend

	// amount
	// :
	// 1200000
	// authorization_code
	// :
	// "AUTH_85ayu9fwd7"
	// bank
	// :
	// "TEST BANK"
	// brand
	// :
	// "visa"
	// card_type
	// :
	// "visa "
	// created_at
	// :
	// "2023-01-16T00:28:46.462465+00:00"
	// created_date_at
	// :
	// "2023-01-16"
	// currency
	// :
	// "NGN"
	// email
	// :
	// "dikevictoruzoma2005@gmail.com"
	// event
	// :
	// "subscription.create"
	// exp_month
	// :
	// 12
	// id
	// :
	// "d0fbf270-625c-4e7f-9a55-27ace8e09ca8"
	// next_payment_date
	// :
	// "2023-07-16"
	// plan_interval
	// :
	// "biannually"
	// plan_name
	// :
	// "binually"
	// signature
	// :
	// "SIG_XsXcuuATQXSCeRltxGDx"
	// status
	// :
	// "active"
	// subscription_code
	// :
	// "SUB_h25tir565gmin76"

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
								referrerPolicy='no-referrer'
								alt={`Avavtar of ${user?.user_metadata.full_name}`}
							/>
						</PhotoWrapper>
						<h1>{user?.user_metadata.full_name}</h1>
						<h3>{user?.user_metadata.email}</h3>
						<Button type={buttonTypes.error} onClick={handleDelete}>
							{' '}
							Delete Account
						</Button>
					</ProfileContainer>
					<UserDetails>
						{userprofile &&
							userprofile.map((user) => {
								return (
									<div key={user.id}>
										<p>{user.email}</p>
										<p>{user.bank}</p>
										<p>{user.brand}</p>
										<p>{user.status}</p>
										<p>{user.plan_name}</p>
										<p>{user.next_payment_date}</p>
										<p>{user.plan_interval}</p>
										<p>{user.amount}</p>
										<p>{user.exp_month}</p>
										<p>{user.currency}</p>
										<p>{user.created_at}</p>
										<p>{user.created_date_at}</p>
									</div>
								);
							})}
					</UserDetails>
				</>
			</SingleHeader>
		</>
	);
}

const UserDetails = styled.div``;
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
