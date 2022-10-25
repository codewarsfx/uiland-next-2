import styled from "styled-components";
import { motion } from "framer-motion";

const ElementsInCategory = () => {
	return (
		<ElementsInCategoryContainer >
			<Screenshot initial={{opacity:0}} animate={{opacity:1}}/>
			<Screenshot initial={{opacity:0}} animate={{opacity:1}} />
			<Screenshot initial={{opacity:0}} animate={{opacity:1}}/>
			<Screenshot initial={{opacity:0}} animate={{opacity:1}}/>
		</ElementsInCategoryContainer>
	);
};

const ElementsInCategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	margin: 1.5em auto;
	gap: 10px;
	width: 90%;

	@media (min-width: 768px) {
		width: 95%;
		margin: 3em auto;
		gap: 20px;
	}
`;

const Screenshot = styled(motion.div)`
	border-radius: 0.8em;
	height: 40vh;
	background-color: var(--light-grey-color);
	@media (min-width: 768px) {
		height: 60vh;
		border-radius: 1.8em;
	}
`;

export default ElementsInCategory;
