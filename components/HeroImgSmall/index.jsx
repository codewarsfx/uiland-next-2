import styled from "styled-components";
import { motion } from "framer-motion";
import { BASE_DELAY_DURATION } from "../../utils/transitionConstants";

const HeroImgSmall = () => {
	return (
        <HeroImgSmallContainer initial={{ y: 10, opacity: 0 }} animate={{
            y: 0, opacity: 1, transition: { delay: BASE_DELAY_DURATION + 1.2
            
        }}}>
			<img src='/assets/img/small.svg' alt='hero-img' />
		</HeroImgSmallContainer>
	);
};

const HeroImgSmallContainer = styled(motion.section)`
	width: 100%;
	position: absolute;
	bottom: -2%;

	img {
		object-fit: cover;
		width: 100%;
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

export default HeroImgSmall;
