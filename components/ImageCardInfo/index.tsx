import React from 'react';
import styled from 'styled-components';
import { Button } from '../uiElements';
import { buttonTypes } from '../uiElements/button';

function ImageCardInfo({
	headerInfo,
	id,
	getAlbumId,
	handleAddToBookMark,
	handleDeleteFromBookMark,
	toggleModal,
}) {
	return (
		<>
			<ImageCardInfoWrapper>
				<ImageCardInfoName>
					<h1>{headerInfo.name}</h1> &nbsp;
					<div>
						<svg
							viewBox='0 0 24 24'
							aria-label='Verified account'
							role='img'
							className='r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr'
							data-testid='icon-verified'
						>
							<g>
								<path d='M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z'></path>
							</g>
						</svg>
					</div>
				</ImageCardInfoName>

				<ImageCardWrapper>
					{!getAlbumId?.includes(id) ? (
						<BookmarkButton onClick={handleAddToBookMark}>
							<img
								src='/assets/img/bookmark-dark.svg'
								alt='bookmark icon'
								className={`effect scale_transition`}
							/>
						</BookmarkButton>
					) : (
						<BookmarkButton onClick={handleDeleteFromBookMark}>
							<img
								src='/assets/img/bookmark-transparent.png'
								alt='bookmark icon'
								className='effect'
							/>
						</BookmarkButton>
					)}
				</ImageCardWrapper>
				<div className='flex-col'>
					<div>
						<h1 className='font_medium'>
							<a
								href={headerInfo.url}
								rel='noopener noreferrer'
								target='_blank'
							>
								Visit Website
							</a>
						</h1>
					</div>
					<div className='button_modal' onClick={toggleModal}>
						<img src='/assets/img/share-icon.svg' alt='share-icon' />
						<div>Share</div>
					</div>
				</div>
			</ImageCardInfoWrapper>
		</>
	);
}
const ImageCardInfoName = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	div {
		height: 23px;
		width: 23px;
	}
	svg {
		fill: var(--primary-color);
	}
`;
const BookmarkButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 1rem;
	cursor: pointer;
	border: none;
	border-radius: 9px;
	outline: none;
	color: white;
	font-size: 2rem;
	font-weight: 500;
	background-color: #c6c8d1;

	&:hover {
		background-color: grey;
	}

	&:focus {
		outline: none;
	}
`;
const ImageCardInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	border-radius: 12px;

	flex-direction: column;
	padding: 24px;
	background: #dddddd;

	& > h1 {
		font-size: 1.8rem;
	}
`;
const ImageCardWrapper = styled.div`
	display: flex;
	align-items: center;
	border-radius: 12px;
	gap: 12px;
	flex-direction: column;
	padding: 14px;
	background: #dddddd;
`;

export default ImageCardInfo;
