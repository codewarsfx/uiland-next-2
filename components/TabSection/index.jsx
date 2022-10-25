import Link from "next/link";
import styled from "styled-components";

import { Pill } from "../uiElements";
import { pillsTypes } from "../uiElements/pills";

const Tab = () => {
	return (
		<TabSectionContainer>
			<TabSectionWrapper>
				<Pill type={pillsTypes.base}>
					<Link href='/screens'>
						<a className='pills'>Screens</a>
					</Link>
				</Pill>
				<Pill type={pillsTypes.base}>
					<Link href='/elements'>
						<a className='pills'>Elements</a>
					</Link>
				</Pill>
			</TabSectionWrapper>
		</TabSectionContainer>
	);
};

const TabSectionContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1.5em 0;
	@media (min-width: 768px) {
		margin: 3em 0;
	}
`;

const TabSectionWrapper = styled.div`
	display: inline-flex;
	padding: 0.5em;
	border-radius: 67px;
	background-color: var(--primary-color);
`;

export default Tab;
