import styled from "styled-components";

const Harmburger = () => {
	return (
		<HarmburgerContainer>
			<HarmburgerSticks />
			<HarmburgerSticks />
			<HarmburgerSticks />
		</HarmburgerContainer>
	);
};

const HarmburgerContainer = styled.div`
cursor: pointer;
	@media (min-width: 768px) {
		display: none;
	}
`;

const HarmburgerSticks = styled.span`
	width: 21px;
	height: 3px;
	background-color: var(--text-color-light);
	display: block;

	:not(:first-child) {
		margin-top: 0.2em;
	}
`;

export default Harmburger;
