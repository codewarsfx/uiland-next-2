import Head from 'next/head';
import Image from 'next/image';

//Third party libraries
import styled from 'styled-components';

// Components
import { BottomSheet, Button, Toast } from '../../../../components/uiElements';
import ImageCardInfo from '../../../../components/ImageCardInfo';
import Modal from '../../../../components/modal';
import { buttonTypes } from '../../../../components/uiElements/button';
import SocialsCard from '../../../../components/SocialsCard';
import Select from '../../../../components/uiElements/select';
import Login from '../../../../components/Login/login';
import ThreeDots from '../../../../components/ThreeDots';
import DeleteIcon from '../../../../components/DeleteIcon';
import SaveIcon from '../../../../components/SaveIcon';
import CloseIcon from '../../../../components/CloseModalIcon';

//hooks

import useScreenshot from '../../../../hooks/useScreenshot';
import { getAllScreens, getScreensById } from '../../../../supabase';
import { GetStaticPaths, GetStaticProps } from 'next';

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
					<SelectModalBox>
						<CloseIcon toggle={newtoggleModal} />
						<form onSubmit={submit}>
							<b style={{ fontSize: '16px' }}>Create a Bookmark</b>

							<div className='select'>
								<select value={bookmarkk} onChange={handleChange}>
									{selectBookmark.map((item, i) => {
										return (
											<option value={item} key={i}>
												{item}
											</option>
										);
									})}
								</select>
							</div>
							<Input
								type='text'
								name='contentForm'
								placeholder='Input Name'
								maxlength='50'
								autocomplete='off'
								value={input}
								onChange={handleChange}
							/>

							<button
								className={`button_modal`}
								type='submit'
								disabled={disabled}
							>
								Submit
							</button>
						</form>
					</SelectModalBox>
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

			<BottomSheet
				openBottomSheet={openBottomSheet}
				closeBottomSheetModal={closeBottomSheetModal}
				downloadImage={downloadImage}
				copyImage={copyImage}
			/>

			<SingleHeader>
				<ImageCardInfo
					headerInfo={headerInfo}
					id={router.query.id}
					getAlbumId={getAlbumId}
					handleAddToBookMark={handleAddToBookMark}
					handleDeleteFromBookMark={handleDeleteFromBookMark}
					toggleModal={toggleModal}
				/>
			</SingleHeader>

			<Select
				elementsCategoryData={elementsCategoryData}
				inputFilter={inputFilter}
				handleInputFilter={handleInputFilter}
			/>
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
						<svg
							width='1440'
							height='200'
							viewBox='0 0 1440 200'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M72,0 Q72,0 72,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M144,0 Q144,0 144,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M216,0 Q216,0 216,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M288,0 Q288,0 288,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M360,0 Q360,0 360,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M432,0 Q432,0 432,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M504,0 Q504,0 504,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M576,0 Q576,0 576,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M648,0 Q648,0 648,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M720,0 Q720,0 720,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M792,0 Q792,0 792,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M864,0 Q864,0 864,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M936,0 Q936,0 936,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M1008,0 Q1008,0 1008,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M1080,0 Q1080,0 1080,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M1152,0 Q1152,0 1152,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M1224,0 Q1224,0 1224,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M1296,0 Q1296,0 1296,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M1368,0 Q1368,0 1368,1200'
								stroke='#E4E7EB'
								stroke-width='1'
								stroke-opacity='1'
							></path>
							<path
								d='M0,45 Q0,45 1440,45'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,90 Q0,90 1440,90'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,135 Q0,135 1440,135'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,180 Q0,180 1440,180'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,225 Q0,225 1440,225'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,270 Q0,270 1440,270'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,315 Q0,315 1440,315'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,360 Q0,360 1440,360'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,405 Q0,405 1440,405'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,450 Q0,450 1440,450'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,495 Q0,495 1440,495'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,540 Q0,540 1440,540'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,585 Q0,585 1440,585'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,630 Q0,630 1440,630'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,675 Q0,675 1440,675'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,720 Q0,720 1440,720'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,765 Q0,765 1440,765'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,810 Q0,810 1440,810'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,855 Q0,855 1440,855'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,900 Q0,900 1440,900'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,945 Q0,945 1440,945'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,990 Q0,990 1440,990'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,1035 Q0,1035 1440,1035'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,1080 Q0,1080 1440,1080'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,1125 Q0,1125 1440,1125'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
							<path
								d='M0,1170 Q0,1170 1440,1170'
								stroke='#E4E7EB'
								stroke-opacity='1'
								stroke-width='1'
							></path>
						</svg>
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
`;
const SubscribeBanner = styled.div`
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
const Input = styled.input.attrs()`
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
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 15px;
	gap: 8px;
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
		margin: 3em auto;
		gap: 20px;
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
	// In production environments, prerender all pages
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
