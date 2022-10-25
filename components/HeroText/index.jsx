import styled from "styled-components";
import { motion } from "framer-motion";

import { Button } from "../uiElements";
import { buttonTypes } from "../uiElements/button";
import { BASE_DELAY_DURATION } from "../../utils/transitionConstants";

const HeroText = () => {
	//animation state

	const initialStateTagline = { y: 20, opacity: 0 };
	const animateToTagline = {
		y: 0,
		opacity: 1,
		transition: {
			delay: BASE_DELAY_DURATION + BASE_DELAY_DURATION + 0.2,
		},
	};

	const initialStateSecondary = { opacity: 0 };
	const animateToSecondary = {
		opacity: 1,
		transition: {
			delay: BASE_DELAY_DURATION + 1,
		},
	};

	return (
		<HeroTextContainer>
			<HeroTextTagLine initial={initialStateTagline} animate={animateToTagline}>
				Get inspired by UI designs from world class Apps
			</HeroTextTagLine>
			<HeroTextSecondary
				initial={initialStateSecondary}
				animate={animateToSecondary}
			>
				Save hours of UI & UX research with our library of mobile screenshots
			</HeroTextSecondary>
			<motion.div initial={initialStateSecondary}
				animate={animateToSecondary}><Button type={buttonTypes.primary}>Try it free</Button></motion.div>
		</HeroTextContainer>
	);
};

const HeroTextContainer = styled.main`
	display: flex;
	width: 90%;
	margin: auto;
	flex-direction: column;
	align-items: center;
	color: var(--text-color-light);
	margin-top: 10vh;

	@media (min-width: 768px) {
		width: 910px;
	}
`;

export const HeroTextTagLine = styled(motion.h1)`
	font-size: 24px;
	line-height: 1.2;
	text-align: center;
	@media (min-width: 768px) {
		font-size: 48px;
		width: 80%;
	}
`;

export const HeroTextSecondary = styled(motion.p)`
	font-size: 16px;
	font-weight: 400;
	margin: 3em 1em;
	line-height: 1.2;
	text-align: center;

	@media (min-width: 768px) {
		font-size: 28px;
		margin: 1em 0;
	}
`;

export default HeroText;
