import Head from 'next/head';
import Image from 'next/image';

//Third party libraries
import styled from 'styled-components';

// Components
import { BottomSheet, Button, Toast } from '../../../../components/uiElements';
import ImageCardInfo from '../../../../components/ImageCardInfo';
import Modal from '../../../../components/modal';
import SocialsCard from '../../../../components/SocialsCard';
import Select from '../../../../components/uiElements/select';
import Login from '../../../../components/Login/login';
import ThreeDots from '../../../../components/ThreeDots';
import DeleteIcon from '../../../../components/DeleteIcon';
import SaveIcon from '../../../../components/SaveIcon';
import CloseIcon from '../../../../components/CloseModalIcon';
import AddToBookmark from '../../../../components/AddToBookmark';

//hooks

import useScreenshot from '../../../../hooks/useScreenshot';
import { getAllScreens, getScreensById } from '../../../../supabase';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';


export default function SinglePage({ screens }) {
	const {
		headerInfo,
		toggleBottomSheet,
		modalSheet,
		modalSaveImage,
		newtoggleModal,
		submit,
		handleChange,
		selectBookmark,
		input,
		disabled,
		toggleModal,
		isModalopen,
		copy,
		isModalLogin,
		loginToggleModal,
		guideModalState,
		guideModal,
		openBottomSheet,
		closeBottomSheetModal,
		downloadImage,
		copyImage,
		getAlbumId,
		handleAddToBookMark,
		handleDeleteFromBookMark,
		elementsCategoryData,
		inputFilter,
		handleInputFilter,
		filtered,
		getId,
		deleteIndividualBookmark,
		bookmark,
		openBottomSheetModal,
		payingbanner,
		handleClickSubscribeButton,
		buttonTypes,
		Progress,
		toastPendingText,
		toastSuccessText,
		router,
		bookmarkk,
	} = useScreenshot(screens);
	const [visits, setVisits] = useState<number>();
	const [active, setActive] = useState<number>(1);

	//This is used to track the number of times a user has visited the screen. The guide modal
	//is displayed if the user is a first-time user.
	useEffect(() => {
		let numberOfVisits = localStorage.getItem('numberOfVisits');
		//changes the string to a number
		let toNumber = parseInt(numberOfVisits);
		if (!toNumber) {
			toNumber = 0;
		}
		//adds one every time a user visits the page
		let addToNumber = +toNumber + 1;
		setVisits(addToNumber);
		if (addToNumber < 2) {
			guideModal();
		}
		localStorage.setItem('numberOfVisits', String(addToNumber));
	}, []);

	//function for the previous state
	function prevPage() {
		setActive((prev) => {
			let prevPage = prev - 1;
			if (prevPage < 1 || prevPage === 1) {
				prevPage = 1;
			}
			return prevPage;
		});
	}
	//function for the next state
	function nextPage() {
		setActive((next) => {
			let nextPage = next + 1;
			if (nextPage > 6 || nextPage === 6) {
				nextPage = 6;
			}
			return nextPage;
		});
	}

	//state for the various guides
	const guides = [
		{
			id: 1,
			title1: 'SAVE ALL PHOTOS EASILY',
			title2:
				'Look for the icon to save all photos instantly  in just few clicks',
			image: '/assets/img/guide-1.png',
		},
		{
			id: 2,
			title1: 'SHARE YOUR BEST SHOTS',
			title2:
				'Share the best photos or the complete gallery on Facebook,Twitter and Whatsapp',
			image: '/assets/img/guide-2.png',
		},
		{
			id: 3,
			title1: 'PICK YOUR FAVOURITES',
			title2:
				'Create a list of Favourite photos to share with your friends ,family, and photographers',
			image: '/assets/img/guide-4.png',
		},
		{
			id: 4,
			title1: 'COPY AND DOWNLOAD YOUR FAVOURITES',
			title2:
				'Look for the icon to copy your images to Figma and download your images instantly  in just few clicks',
			image: '/assets/img/guide-5.png',
		},
		{
			id: 5,
			title1: 'COPY AND DOWNLOAD YOUR FAVOURITES',
			title2:
				'Look for the icon to copy your images to Figma and download your images instantly  in just few clicks',
			image: '/assets/img/guide-6.png',
		},
		{
			id: 6,
			title1: 'FILTER TO YOUR FAVOURITE IMAGES',
			title2:
				'Look for the icon to filter the images  instantly  in just few clicks',
			image: '/assets/img/guide-3.png',
		},
	];
	return (
		<>
			{/* for SEO */}
			<Head>
				<title>{headerInfo.name} app screens</title>
				<meta
					name='description'
					content={`screenshots of ${headerInfo.name} Andriod app`}
				/>
				<meta
					name='keywords'
					content='ui, design, inspiration, ux, mobile, apps, screenshots'
				/>
				<meta property='og:type' content='website' />
				<meta
					property='og:title'
					content={`${headerInfo.name} Andriod app screenshots`}
				/>
				<meta
					property='og:description'
					content={`screenshots of ${headerInfo.name} Andriod app`}
				/>
				<meta
					property='og:url'
					content={`https://uiland.design/screens/${headerInfo.name}/screens/${headerInfo.id}`}
				/>
				<meta name='twitter:card' content='image' />
				<meta property='og:image' content={`${headerInfo.logo}`} />
				<meta name='twitter:image:src' content={`${headerInfo.logo}`} />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
				></meta>
			</Head>

			{modalSheet && (
				<Modal toggleModal={toggleBottomSheet}>
					<ModalBox>
						<CloseIcon toggle={toggleBottomSheet} />
						<BottomsheetModal>
							<div onClick={downloadImage}>Download Image</div>
							<div onClick={copyImage}>Copy Image</div>
						</BottomsheetModal>
					</ModalBox>
				</Modal>
			)}
			{modalSaveImage && (
				<Modal toggleModal={newtoggleModal}>
					<AddToBookmark
						newtoggleModal={newtoggleModal}
						submit={submit}
						handleChange={handleChange}
						bookmarkk={bookmarkk}
						selectBookmark={selectBookmark}
						input={input}
						disabled={disabled}
					/>
				</Modal>
			)}
			{isModalopen && (
				<Modal toggleModal={toggleModal}>
					<SocialModalBox>
						<SocialsCard
							id={router.query.id}
							copy={copy}
							name={router.query.name}
						/>
					</SocialModalBox>
				</Modal>
			)}
			{isModalLogin && (
				<Modal toggleModal={loginToggleModal}>
					<Login toggleModal={loginToggleModal} />
				</Modal>
			)}
			{guideModalState && (
				<Modal toggleModal={guideModal}>
					<SocialModalBox>
						<GuideBox>
							{guides &&
								guides
									.filter((guide) => guide.id === active)
									.map((result) => (
										<>
											<GuideWrapper>
												<div className='border-bottom'>
													<img src={result.image} />
												</div>

												<GuideBoxContent>
													<h2>{result.title1}</h2>
													<p>{result.title2}</p>
												</GuideBoxContent>
											</GuideWrapper>
										</>
									))}

							<NavigationBox>
								{active !== 1 ? (
									<button onClick={prevPage}>Back</button>
								) : (
									<div></div>
								)}
								<button
									className='active'
									onClick={active === 6 ? guideModal : nextPage}
								>
									{active === 6 ? 'Explore ' : 'Next'}
								</button>
							</NavigationBox>
						</GuideBox>
						<DotWrapper>
							<div className={`dot ${active === 1 && 'active'}`}></div>
							<div className={`dot ${active === 2 && 'active'}`}></div>
							<div className={`dot ${active === 3 && 'active'}`}></div>
							<div className={`dot ${active === 4 && 'active'}`}></div>
							<div className={`dot ${active === 5 && 'active'}`}></div>
							<div className={`dot ${active === 6 && 'active'}`}></div>
						</DotWrapper>
					</SocialModalBox>
				</Modal>
			)}
			<BottomSheet
				openBottomSheet={openBottomSheet}
				closeBottomSheetModal={closeBottomSheetModal}
				downloadImage={downloadImage}
				copyImage={copyImage}
			/>

			<SingleHeader>
				<ImageCardInfo headerInfo={headerInfo} count={filtered?.length} />
			</SingleHeader>

			<SecondHeader>
				<ImageCardWrapper>
					{!getAlbumId?.includes(router.query.id) ? (
						<BookmarkButton
							onClick={handleAddToBookMark}
							title='add to bookmark'
						>
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
					<div className='button_modal' onClick={toggleModal}>
						<img src='/assets/img/share.svg' alt='share-icon' />
					</div>
				</ImageCardWrapper>
				{/* <div className='flex-col'>
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
					
				</div> */}
				<Select
					elementsCategoryData={elementsCategoryData}
					inputFilter={inputFilter}
					handleInputFilter={handleInputFilter}
				/>{' '}
			</SecondHeader>

			<ElementsInCategoryContainer>
				{/* todo:populate with filtered data */}
				{filtered?.map((data) => (
					<ScreenShotContent key={data.id}>
						<ScreenshotContainer>
							<Image
								src={data.url}
								alt={`Screenshots of ${headerInfo.name} App`}
								width={1080}
								height={2240}
							/>
						</ScreenshotContainer>

						<SecondRow>
							{getId.includes(data.id) ? (
								<DeleteIcon
									deleteIndividualBookmark={deleteIndividualBookmark}
									data={data}
								/>
							) : (
								<SaveIcon bookmark={bookmark} data={data} />
							)}
							<ThreeDots openBottomSheet={openBottomSheetModal} />
						</SecondRow>
					</ScreenShotContent>
				))}
			</ElementsInCategoryContainer>
			{!payingbanner && (
				<SubscribeBanner>
					<ButtonWrapper onClick={handleClickSubscribeButton}>
						<Button type={buttonTypes.modal}>
							Subscribe to View All Screens
						</Button>
					</ButtonWrapper>
					<GridBackground>
						<img src='/assets/img/grid.svg' alt='grid' />
					</GridBackground>
					<Cloud></Cloud>
				</SubscribeBanner>
			)}
			<Toast
				Progress={Progress}
				pendingText={toastPendingText}
				successText={toastSuccessText}
			/>
		</>
	);
}
const Dot = styled.div`
	height: 20px;
	width: 20px;
	border-radius: 50%;
	.active {
		background-color: white;
	}
`;

const DotWrapper = styled.div`
	display: flex;
	width: 100%;
	gap: 12px;
	align-items: center;
	padding: 12px;
	background: #070707;
	border-radius: 8px;

	justify-content: center;
	.dot {
		height: 20px;
		width: 20px;
		border-radius: 50%;
		background: grey;
	}
	.dot.active {
		background: white;
	}
`;
const GuideBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const GuideWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.border-bottom {
		border-bottom: 1px solid grey;
	}
	img {
		width: 100%;
		object-fit: cover;
	}
`;
const GuideBoxContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 20px;
	margin: 12px 0;
`;
const NavigationBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 12px;
	button {
		display: flex;
		cursor: pointer;
		padding: 12px 20px;
		border: 1px solid #bbbaba;
		border-radius: 6px;
		font-size: 18px;
		font-weight: 500;
		color: black;
		background: white;
	}
	button.active {
		background: var(--primary-color);
		color: white;
	}
`;
const ImageCardWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	flex-direction: row;
`;

const BookmarkButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.5rem;
	cursor: pointer;
	border: none;
	border-radius: 50%;
	outline: none;
	color: white;
	font-size: 2rem;
	font-weight: 500;
	background: #ffffff;
	box-shadow: 0px 2px 4px 0px #c3c1c1;

	&:hover {
		background-color: grey;
	}

	&:focus {
		outline: none;
	}
`;
const SecondHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 95%;
	margin: 3em auto;
`;
const Cloud = styled.div`
	background-image: radial-gradient(
		60.83% 60.83% at 50% 50%,
		#fbfbfb 47.02%,
		hsla(0, 0%, 98%, 0) 100%
	);
	position: absolute;
	top: 0;
	width: 100%;
	left: 0;
	height: 100%;
`;
const ButtonWrapper = styled.div`
	z-index: 3;
`;
const GridBackground = styled.div`
	position: absolute;
	height: 100%;
	img {
		width: 100%;
	}
`;
const SubscribeBanner = styled.div`
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	position: relative;
	/* margin-top: -223px; */
	background: linear-gradient(
		rgba(255, 255, 255, 0),
		rgba(255, 255, 255, 1),
		rgb(255, 255, 255)
	);
	height: 200px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #bcbec9;
	border-top-right-radius: 40px;
	border-top-left-radius: 40px;
`;

const BottomsheetModal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: black;
	font-size: 20px;
	div {
		width: 100%;

		text-align: center;
		padding: 12px;
		font-weight: 500;
	}
	div:first-child {
		border-bottom: 1px solid #dddddd;
	}
`;
const SecondRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background: rgb(0 0 0 / 9%);
	border-radius: 28px;
`;
const Input = styled.input.attrs((props) => ({}))`
	color: black;
	font-size: 1em;
	border: 1px solid grey;
	border-radius: 6px;
	margin-top: 14px;
	width: 100%;
	padding: 12px;
`;
const ScreenShotContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
const SelectModalBox = styled.div`
	width: 80%;

	background-color: #fff;
	max-width: 37.5rem;
	padding: 1.6rem;
	border-radius: 0.5rem;
	position: relative;
	img {
		width: 5rem;
		transform-origin: 100% 0;
		opacity: 1;
		position: absolute;
		top: 6px;
		right: 6px;
		transform: scale(0.28);
	}
`;
const ModalBox = styled.div`
	width: 80%;
	position: relative;
	background-color: #fff;
	max-width: 37.5rem;
	padding: 1.6rem;
	border-radius: 0.5rem;
	img {
		width: 5rem;
		transform-origin: 100% 0;
		opacity: 1;
		position: absolute;
		top: 4px;
		right: 4px;
		transform: scale(0.28);
	}
`;
const SocialModalBox = styled.div`
	width: 80%;
	position: relative;
	background-color: #fff;
	max-width: 37.5rem;
	padding: 1.6rem;
	border-radius: 0.5rem;
`;

const ScreenshotContainer = styled.div`
	border-radius: 0.8em;
	background: linear-gradient(to bottom, white 99%, black 1%);
	overflow: auto;
	border: 1px solid #dce0f1;
	border-radius: 20px;
	position: relative;
	cursor: pointer;
	user-select: none;
	&:hover .target {
		visibility: visible;
	}
	img {
		pointer-events: none;
	}
`;

const Title = styled.div`
	cursor: pointer;
	font-size: 12px;
	font-weight: 300;
	margin: 0;
	padding: 5px;
	border-radius: 5px;
	background: rgba(0, 0, 0, 0.17);
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
const SingleHeader = styled.div`
	display: flex;
	flex-direction: row;
	background: #eaf3ff;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 3em;
	/* padding: 15px; */
	gap: 28px;
`;

const WebLink = styled.a`
	font-weight: 200;
	font-size: 1.3rem;
	text-decoration: none;
	color: var(--primary-color);
`;
const ElementsInCategoryContainer = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	margin: 1.5em auto;
	gap: 32px;
	width: 90%;
	@media (min-width: 540px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 768px) {
		width: 95%;

		margin: 0 auto 3em auto;
		gap: 32px;
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const getStaticPaths: GetStaticPaths = async () => {
	// When this is true (in preview environments) don't
	// prerender any static pages
	// (faster builds, but slower initial page load)
	if (process.env.SKIP_BUILD_STATIC_GENERATION) {
		return {
			paths: [],
			fallback: 'blocking',
		};
	}

	// Call an external API endpoint to get posts
	const screen = await getAllScreens();
	// Get the paths we want to prerender based on posts
	// In production environments, prerender all page
	// (slower builds, but faster initial page load)
	const paths = screen?.map((post) => ({
		params: { id: post.id, name: post.name.toLowerCase() },
	}));

	// { fallback: false } means other routes should 404
	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params.id;

	const screens = await getScreensById(id);
	return {
		props: { screens },
	};
};
