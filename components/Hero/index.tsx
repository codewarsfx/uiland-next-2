import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeroImgBig from '../HeroImgBig';
import HeroImgSmall from '../HeroImgSmall';
import HeroText from '../HeroText';

const Hero = () => {
	return (
		<HeroContainer>
			<HeroText />
			<HeroImgBig />
			<HeroImgSmall />
		</HeroContainer>
	);
};

const HeroContainer = styled(motion.div)`
	width: 100vw;
	height: 100vh;
	background-color: var(--primary-color);
	overflow: hidden;
	position: relative;
`;

export default Hero;
