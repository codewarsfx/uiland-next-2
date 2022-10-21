import styled from "styled-components";


export const pillsTypes = {
	base: "base",
	category: "category",
	screenshot: "screenshot",
};

const getPill = (pillType) => {
	return {
		[pillsTypes.base]: BasePill,
		[pillsTypes.category]: CategoryPill,
		[pillsTypes.screenshot]: ScreenshotPill,
	}[pillType];
};

const Pill = ({ type, children, ...otherProps }) => {
	const PillType = getPill(type);

	return (
		<>
			<PillType {...otherProps}> {children} </PillType>
		</>
	);
};

//base pill style
const BasePill = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--text-color-light);
	border-radius: 5em;
	font-size: 15px;
	&:focus {
		background-color: ${({ activeState }) => activeState};
	}

	@media (min-width: 768px) {
		font-size: 20px;
	}
`;

// pill styles for the category scroll
const CategoryPill = styled(BasePill)`
	border: 1px solid var(--light-grey-color);
	color: var(---text-color-dark);
	font-size: 14px;
	transition: background-color 0.2s ease;

	:first-child {
		margin-left: 0.8em;
	}

	@media (min-width: 768px) {
		:first-child {
			margin-left: 3em;
		}
	}

	:hover {
		background-color: var(--light-grey-color);
	}


`;

const ScreenshotPill = styled(BasePill)`
	font-size: 12px;
	color: var(--primary-color);
	border: 1px solid var(--primary-color);
	background-color: #e6f0ff;
	margin-left: auto;
	padding: 0.4em 0.9em;
`;

export default Pill;
