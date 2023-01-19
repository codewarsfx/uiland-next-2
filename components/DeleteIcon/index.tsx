import React from 'react';
import styled from 'styled-components';
function DeleteIcon({ deleteIndividualBookmark, data }) {
	return (
		<>
			<DownloadWrapper onClick={() => deleteIndividualBookmark(data)}>
				<Title className='target' title='delete from collection'>
					<img src='/assets/img/heart-filled.png' alt='delete icon' />
				</Title>
			</DownloadWrapper>
		</>
	);
}
const DownloadWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 7px 0px 7px 12px;
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
		height: 30px;
		width: 100%;
		transition: all 0.5s ease-out;
	}
`;
export default DeleteIcon;
