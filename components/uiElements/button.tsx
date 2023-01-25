import styled from 'styled-components';

export const buttonTypes = {
	base: 'base',
	primary: 'primary',
	login: 'login',
	google: 'google',
	error: 'error',
	bookmark: 'bookmark',
	modal: 'modal',
};

const getButton = (buttonType: string | number) => {
	return {
		[buttonTypes.base]: BaseButton,
		[buttonTypes.primary]: PrimaryButton,
		[buttonTypes.login]: LoginButton,
		[buttonTypes.google]: GoogleButton,
		[buttonTypes.error]: ErrorButton,
		[buttonTypes.modal]: ModalButton,
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
	font-size: 14px;
	color: var(--primary-color);
	border: none;
	cursor: pointer;

	@media (min-width: 768px) {
		font-size: 20px;
	}
`;

const PrimaryButton = styled(BaseButton)`
	color: white;
	background-color: var(--primary-color);
	border: 1px solid white;
	border-radius: 40px;
	transition: transform 0.1s ease;
	font-weight: 500;

	:hover {
		transform: scale(1.05);
	}
`;

const LoginButton = styled(PrimaryButton)`



`;

const GoogleButton = styled(PrimaryButton)`
	color: black;
	background-color: var(--text-color-light);
	padding-top: 0.6em;
	padding-bottom: 0.6em;
	border: 1px solid #5c727d;
`;
const ErrorButton = styled(PrimaryButton)`
	color: var(--text-color-light);
	background-color: var(--error-color);
	padding-top: 1em;
	padding-bottom: 1em;
`;

const ModalButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 14px 0 4px 0;
	background: var(--primary-color);
	border-color: var(--primary-color);
	padding: 1rem 2.4rem;
	color: white;
	cursor: pointer;
	border-radius: 5px;
	font-size: 2rem;
	flex-direction: row;
	gap: 8px;

	&:disabled {
		background-color: #dddddd !important;
		cursor: not-allowed;
		opacity: 1 !important;
		border: none !important;
	}
	&:hover {
		background-color: #112158;
	}
`;
export default Button;
