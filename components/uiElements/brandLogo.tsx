import styled from 'styled-components';
const BrandLogo = ({ imageUrl }) => {
	return (
		<BrandLogoCotainer>
			<img src={imageUrl} alt='brandlogo' />
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
	padding: 9px;
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
