import styled from 'styled-components';
const BrandLogo = ({ imageUrl }) => {
	return (
		<BrandLogoCotainer>
			<img src={imageUrl} alt='brandlogo' loading="lazy" width="48" height="48" />
		</BrandLogoCotainer>
	);
};

const BrandLogoCotainer = styled.div`
	width: 50px;
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: center;
	border-radius: 12px;

	background: white;
	overflow: hidden;
	border: 1px solid #dddddd;
	img {
		height: 100%;
		width: 100%;
	}
	/* @media (min-width: 768px) {
		width: 50px;
		height: 50px;
	} */
`;

export default BrandLogo;
