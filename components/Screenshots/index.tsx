import Image from 'next/image';
import styled from 'styled-components';
import useScreenshot from '../../hooks/useScreenshot';
import CloseIcon from '../CloseModalIcon';
import DeleteIcon from '../DeleteIcon';
import Modal from '../modal';
import SaveIcon from '../SaveIcon';
import ThreeDots from '../ThreeDots';
import { Input } from '../uiElements';

const Screenshots = ({ screens }) => {
	const {
		toggleBottomSheet,
		modalSheet,
		modalSaveImage,
		newtoggleModal,
		submit,
		handleChange,
		selectBookmark,
		input,
		disabled,
		downloadImage,
		copyImage,
		getId,
		deleteIndividualBookmark,
		bookmark,
		openBottomSheetModal,
		bookmarkk,
	} = useScreenshot(screens);
	console.log(screens);
	return (
		<>
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
								placeholder='Input Name'
								submit={submit}
								input={input}
								handleChange={handleChange}
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

			{screens.map((data) => (
				<ScreenShotContent key={data.screen_id.url}>
					<ScreenshotContainer key={data.screen_id.url}>
						{/* add the name to alt tag */}
						<Image
							src={data.screen_id.url}
							alt={`Screenshots of  App`}
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
		</>
	);
};

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

const ScreenShotContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const SecondRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background: rgb(0 0 0 / 9%);
	border-radius: 28px;
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

export default Screenshots;
