import styled from "styled-components";

export const buttonTypes = {
	base: "base",
	primary: "primary",
	login: "login",
	google: "google",
};

const getButton = (buttonType) => {
	return {
		[buttonTypes.base]: BaseButton,
		[buttonTypes.primary]: PrimaryButton,
		[buttonTypes.login]: LoginButton,
		[buttonTypes.google]: GoogleButton,
	}[buttonType];
};

const Button = ({ type, children }) => {
	const ButtonType = getButton(type);

	return (
		<>
			<ButtonType>{children}</ButtonType>
		</>
	);
};

//base button style
const BaseButton = styled.button`
	padding: 0.6em 2.4em;
	font-size: 16px;
	color: var(--primary-color);
	border: none;
	cursor: pointer;

	@media (min-width: 768px) {
		font-size: 20px;
	}
`;

const PrimaryButton = styled(BaseButton)`
	color: var(--primary-color);
	background-color: var(--text-color-light);
	border-radius: 8px;
	transition: transform 0.1s ease;

	:hover {
		transform: scale(1.05);
	}
`;

const LoginButton = styled(PrimaryButton)`
	display: none;
	@media (min-width: 768px) {
		display: block;
	}
`;

const GoogleButton = styled(PrimaryButton)`
	color: var(--text-color-light);
	background-color: var(--primary-color);
	padding-top: 1em;
	padding-bottom:1em;
`;

export default Button;
