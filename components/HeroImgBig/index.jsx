import styled from "styled-components";
import { motion } from "framer-motion";

const HeroImgBig = () => {
    

	return (
		<HeroImgBigContainer>
            <HeroImageLeft initial={{ y:20, opacity:0 }} animate={{
              y:0,  opacity: 1, transition: { delay: 1.7
            }}}>
				<img src='/assets/img/batter3.svg' alt='hero-iphone' />
			</HeroImageLeft>
			<HeroImageCenter initial={{ opacity:0 }} animate={{
               opacity:1, transition: { delay: 1.5
            }}}  >
				<img src='/assets/img/cowrywisesvg.svg' alt='hero-iphone' />
			</HeroImageCenter>
			<HeroImageRight  initial={{ y:20,opacity:0 }} animate={{
               y:0, opacity: 1, transition: { delay: 1.7
            }}}>
				<img src='/assets/img/flex.svg' alt='hero-iphone' />
			</HeroImageRight>
		</HeroImgBigContainer>
	);
};

const HeroImgBigContainer = styled.section`
	display: none;

	@media (min-width: 768px) {
		display: block;
		margin: 4vh auto;
		position: relative;
		height: 50vh;
		width: 85%;
	}
`;

const HeroImage = styled(motion.div)`
	position: absolute;
`;

const HeroImageCenter = styled(HeroImage)`
	left: 50%;
	transform: translateX(-50%) scale(0.9);
`;

const HeroImageLeft = styled(HeroImage)`
	top: 18%;
`;

const HeroImageRight = styled(HeroImage)`
	right: 0;
	top: 18%;
`;

export default HeroImgBig;
