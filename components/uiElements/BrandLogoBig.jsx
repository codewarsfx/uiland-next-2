import styled from "styled-components";
import Image from "next/image"
const BrandLogoBig = ({ imageUrl }) => {
	return (
		<BrandLogoCotainer>
			<Image src={imageUrl} width={90} height={90} alt='brandlogo'  />
		</BrandLogoCotainer>
	);
};

const BrandLogoCotainer = styled.div`
border-radius: 1em;
overflow:hidden;
`;

export default BrandLogoBig;
