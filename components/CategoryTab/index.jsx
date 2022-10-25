import Link from "next/link";
import styled from "styled-components";

import { Pill } from "../uiElements";
import { pillsTypes } from "../uiElements/pills";

const CategoryTabBar = () => {
	// const categories = [];

	return (
		<CategoryTabContainer>
			<CategoryTabWrapper>
				<Pill type={pillsTypes.category}>
					<Link href='/'>
						<a className='pills'>FINTECH</a>
					</Link>
				</Pill>
			</CategoryTabWrapper>
		</CategoryTabContainer>
	);
};

const CategoryTabContainer = styled.section`
	margin: 1.5em 0;
	padding: 1em 0;
	border: 1px solid var(--light-grey-color);
	@media (min-width: 768px) {
		margin: 3em 0;
	}
`;

const CategoryTabWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	overflow-x: scroll;
	gap: 0.8em;

	::-webkit-scrollbar {
		display: none;
	}

	@media (min-width: 768px) {
		gap: 2.8em;
	}
`;

export default CategoryTabBar;
