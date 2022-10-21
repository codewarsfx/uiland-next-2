import styled from "styled-components";
import { motion } from "framer-motion";

import { Button, Harmburger } from "../uiElements";
import { buttonTypes } from "../uiElements/button";
import {
	BASE_DELAY_DURATION,
	BASE_DURATION,
} from "../../utils/transitionConstants";
import useModal from "../../hooks/useModal";
import Login from "../Login/login";
import Modal from "../modal";
import { useContext } from "react";
import { UserContext } from "../../context/authContext";
import { signout } from "../../firebase";

const Header = () => {
	const { isModalopen, toggleModal } = useModal();
	const user = useContext(UserContext);

	
	//animations states
	const initialState = { y: -100 };
	const animateTo = {
		y: 0,
		transition: {
			type: "spring",
			stiffness: 300,
			delay: BASE_DELAY_DURATION,
			duration: BASE_DURATION,
		},
	};

	return (
		<HeaderContainer initial={initialState} animate={animateTo}>
			<div>
				<img src='/assets/img/UL.png' alt='' />
			</div>
			<HeaderCTA>
				{!user ? (
					<div onClick={() => toggleModal()}>
						<Button type={buttonTypes.login}> Login</Button>
						<Harmburger onClick={() => toggleModal()} />
					</div>
				) : (
					<h4>
						Hi {user?.displayName}, <span onClick={signout}>LOG OUT</span>
					</h4>
				)}
			</HeaderCTA>
			{isModalopen && (
				<Modal toggleModal={toggleModal}>
					<Login toggleModal={toggleModal} />
				</Modal>
			)}
		</HeaderContainer>
	);
};

const HeaderContainer = styled(motion.header)`
	width: 90%;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.5em 0;

	@media (min-width: 768px) {
		width: 95%;
	}
`;

const HeaderCTA = styled.div`
	margin-left: auto;
	h4 {
		color: white;
		span {
			text-decoration: underline;
			margin-left: 1em;
			cursor: pointer;
		}
	}
`;

export default Header;
