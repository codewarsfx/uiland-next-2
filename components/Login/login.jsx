import styled from "styled-components";
import { toast } from "react-toastify";

import { Button } from "../uiElements";
import { buttonTypes } from "../uiElements/button";
import { signInWithGoogle } from "../../firebase";
const Login = ({ toggleModal }) => {
	//handler function for signin with Google
	const handleSignupWithGoogle = async () => {
		try {
			await signInWithGoogle();
			toggleModal();
			toast.success("Sign In Successfull");
		} catch (e) {
			toast.error("Sorry an error occurred while trying to login");
		}
	};

	return (
		<LoginContainer onClick={(e) => e.stopPropagation()}>
			<h1>
				<span>UL</span>
				Welcome to UILand
			</h1>
			<p>Don't have an account?</p>
			<div onClick={() => handleSignupWithGoogle()}>
				<Button type={buttonTypes.google}>
					<span className='google-logo'>G</span>Continue with Google
				</Button>
			</div>
		</LoginContainer>
	);
};

const LoginContainer = styled.div`
	background-color: #fff;
	border-radius: 20px;
	width: 80%;
	max-width: 650px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 50%;
	box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.4);

	h1 {
		font-weight: 700;
		font-size: 24px;
		text-align: center;
		color: #202021;

		span {
			display: block;
			margin-bottom: 0.5em;
			color: var(--primary-color);
		}
		@media (min-width: 768px) {
			font-size: 48px;
		}
	}

	p {
		font-weight: 400;
		font-size: 16px;
		color: #626569;
		margin: 1.5em;
		@media (min-width: 768px) {
			font-size: 24px;
		}
	}

	.google-logo {
		margin-right: 0.8em;
		font-weight: 700;
	}
`;

export default Login;
