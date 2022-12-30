import styled from "styled-components";

const Hamburger = () => {
	return (
		<HamburgerContainer>
			<HamburgerSticks />
			<HamburgerSticks />
			<HamburgerSticks />
		</HamburgerContainer>
	);
};

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

export default Hamburger;
