import styled from "styled-components";

const BrandDescription = ({ name, category }) => {
	return (
		<BrandDescriptionContainer>
			<h3 className='brand-name'>{name}</h3>
			<p className='brand-category'>{category}</p>
		</BrandDescriptionContainer>
	);
};

const BrandDescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 0.5em;

	.brand-name {
		font-weight: 700;
		font-size: 16px;
		color: var(---text-color-dark);
	}

	.brand-category {
		font-size: 12px;
		color: #888;
		margin-top: 0.5em;
	}

	@media (min-width: 768px) {
		.brand-name {
			font-size: 20px;
		}

		.brand-category {
			font-size: 14px;
		}
	}
`;

export default BrandDescription;
