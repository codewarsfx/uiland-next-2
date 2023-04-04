import React from 'react';
import styled from 'styled-components';
function CopyIcon({ copyImage, image }) {
	return (
		<>
			<DownloadWrapper onClick={() => copyImage(image)}>
				<Title className='target' title='Copy Image'>
					<img src='/assets/img/copy-icon2.svg' alt='copy icon' />
				</Title>
			</DownloadWrapper>
		</>
	);
}
const DownloadWrapper = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Title = styled.div`
	cursor: pointer;
	font-size: 12px;
	font-weight: 300;
	margin: 0;
	padding: 5px;
	border-radius: 5px;
	svg {
		width: 23px;
		height: 23px;
		vertical-align: middle;
	}
	img {
		height: 24px;
		width: 100%;
		transition: all 0.5s ease-out;
	}
`;
export default CopyIcon;
