import { useContext, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button, Hamburger } from '../uiElements';
import { buttonTypes } from '../uiElements/button';
import {
	BASE_DELAY_DURATION,
	BASE_DURATION,
} from '../../utils/transitionConstants';
import useModal from '../../hooks/useModal';

import Login from '../Login/login';
import Modal from '../modal';
import { UserContext } from '../../context/authContext';
import { signout } from '../../supabase';
import Link from 'next/link';

const Header = () => {
	const { isModalopen, toggleModal } = useModal();

	const user = useContext(UserContext);
	const [popup, setPopup] = useState(false);

	//animations states
	const initialState = { opacity:0 };
	const animateTo = {
		opacity: 1,
		transition: {
			delay: BASE_DELAY_DURATION,
			duration: BASE_DURATION,
		}
	};

	function showPopup() {
		setPopup(!popup);
	}
	return (
		<>
			<Wrapper>
				<HeaderContainer initial={initialState} animate={animateTo}>
					<HeaderLogo>
						<Link href='/'>
							<img src='/assets/img/UL.png' alt='my next image' />
						</Link>
					</HeaderLogo>
					<HeaderCTA>
						{!user ? (
							<div onClick={() => toggleModal()}>
								<Button type={buttonTypes.login}> Login</Button>
							</div>
						) : (
							<HeaderInfo>
								<CollectionText>
									<Link href='/collections'>
										<a>Collections</a>
									</Link>
								</CollectionText>

								<PhotoWrapper>
									<RelativeWrapper onClick={showPopup}>
										<img
											src={user?.user_metadata.avatar_url}
											referrerPolicy='no-referrer'
											alt={`Avavtar of ${user?.user_metadata.full_name}`}
										/>
										{popup && (
											<Popup>
												<ProfileText>
													<Link href='/profile'>Profile</Link>
												</ProfileText>
												<LogOutText onClick={signout}>Log Out</LogOutText>
											</Popup>
										)}
									</RelativeWrapper>
								</PhotoWrapper>
							</HeaderInfo>
						)}
					</HeaderCTA>
					{isModalopen && (
						<Modal toggleModal={toggleModal}>
							<Login toggleModal={toggleModal} />
						</Modal>
					)}
				</HeaderContainer>
			</Wrapper>
		</>
	);
};
const CollectionText = styled.div`
	font-size: 16px;
	font-weight: 600;
	color: white;
`;
const RelativeWrapper = styled.div``;
const LogOutText = styled.div`
	font-weight: 600;
	color: red;
`;
const ProfileText = styled.div`
	font-weight: 600;
	a {
		color: black;
	}
`;
const Popup = styled.div`
	background: white;
	padding: 12px;
	border-radius: 12px;
	position: absolute;
	top: 35px;
	left: 14px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
		var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
	border: 1px solid #e6e4e4;
`;
const Wrapper = styled.div`
	background: var(--primary-color);
`;
const HeaderLogo = styled.div`
	cursor: pointer;
`;
const PhotoWrapper = styled.div`
	overflow: hidden;
	cursor: pointer;
	img {
		border: 2px solid white;
		border-radius: 100%;
		height: 32px;
		width: 32px;
	}
`;
const HeaderInfo = styled.div`
	display: flex;
	gap: 12px;
	align-items: center;
	position: relative;
`;
const HeaderContainer = styled(motion.header)`
	width: 90%;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.5em 0;
`;

const HeaderCTA = styled.div`
	margin-left: auto;
	h4 {
		color: white;
	}
	span {
		text-decoration: underline;
		margin-left: 1em;
		cursor: pointer;
	}
`;

const HamburgerContainer = styled.div`
	cursor: pointer;
	@media (min-width: 768px) {
		display: none;
	}
`;

const HamburgerSticks = styled.span`
	width: 21px;
	height: 3px;
	background-color: var(--text-color-light);
	display: block;

	:not(:first-child) {
		margin-top: 0.2em;
	}
`;

export default Header;
