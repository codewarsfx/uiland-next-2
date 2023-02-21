import styled from 'styled-components';

import React from 'react';

type brandDescriptionProps = {
	name: string,
	category:string
};


const BrandDescription: React.FC<brandDescriptionProps>= ({ name, category }) => {
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
		font-weight: 600;
		font-size: 16px;
		color: var(--primary-text-black);
	}

	.brand-category {
		font-size: 12px;
		color: #8691a0;
		margin-top: 0.5em;
		font-weight: 500;
	}

	@media (min-width: 768px) {
		.brand-name {
			font-size: 24px;
		}

		.brand-category {
			font-size: 16px;
		}
	}
`;

export default BrandDescription;
