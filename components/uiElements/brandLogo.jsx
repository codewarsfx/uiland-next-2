import styled from "styled-components";

const BrandLogo = ({ imageUrl }) => {
	return (
		<BrandLogoCotainer>
			<img src={imageUrl} alt='brandlogo' />
		</BrandLogoCotainer>
	);
};

const BrandLogoCotainer = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 1em;
	img {
		height: 100%;
		width: 100%;
        border-radius: 1em;
	}
	@media (min-width: 768px) {
		width: 45px;
		height: 45px;

	}
`;

export default BrandLogo;
