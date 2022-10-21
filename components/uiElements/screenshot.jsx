import styled from "styled-components";
import { motion } from "framer-motion";

const Screenshot = ({imgLink,Name}) => {
	return (
		<>
			<ScreenshotContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<img src={imgLink} alt={Name} />
			</ScreenshotContainer>
		</>
	);
};



const ScreenshotContainer = styled(motion.div)`
	border-radius: 0.8em;
	background-color: var(--light-grey-color);

	img{
		height: 100%;
		width:100%;
		display: block;
		border-radius: 0.8em;
	}

	@media (min-width: 768px) {
		border-radius: 2em;
		height: auto;
		img{
			border-radius: 2em;
		}

	}
`;

export default Screenshot;
