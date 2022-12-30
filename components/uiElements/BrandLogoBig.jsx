import styled from "styled-components";
import Image from "next/image"
const BrandLogobig = ({ imageUrl }) => {
	return (
		<BrandLogoContainer>
			<Image src={imageUrl} width={90} height={90} alt='brandlogo'  />
		</BrandLogoContainer>
	);
};

const BrandLogoContainer = styled.div`
border-radius: 1em;
overflow:hidden;
`;

export default BrandLogobig;
