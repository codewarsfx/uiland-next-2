import { useEffect } from 'react';
import styled from 'styled-components';

const BottomSheet = ({
	closeBottomSheetModal,
	downloadImage,
	copyImage,
	openBottomSheet,
}) => {
	useEffect(() => {
		window.onclick = function (event: any) {
			if (event.target.className.includes('BottomSheetWrapper')) {
				closeBottomSheetModal();
			}
		};
	}, [closeBottomSheetModal]);
	return (
		<>
			{openBottomSheet && (
				<BottomSheetWrapper>
					<BottomSheetContainer>
						<DownloadContent onClick={downloadImage}>
							Download Image
						</DownloadContent>
						<CopyContent onClick={copyImage}>Copy image</CopyContent>
					</BottomSheetContainer>
				</BottomSheetWrapper>
			)}
		</>
	);
};

const DownloadContent = styled.div`
	background: var(--primary-color);
	padding: 12px 0;
	border-radius: 12px;
	color: white;
`;
const CopyContent = styled.div`
	background: var(--primary-color);
	padding: 12px 0;
	border-radius: 12px;
	color: white;
`;
const BottomSheetWrapper = styled.div`
	background-color: rgba(0, 0, 0, 0.7);
	position: fixed;
	display: block;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 100;
`;
const BottomSheetContainer = styled.div`
	position: fixed;
	display: block;
	border-radius: 16px;
	text-align: center;
	background: white;
	bottom: 0;
	right: 50%;
	left: 50%;
	margin: 0 auto;
	transform: translate(-50%, -10px);
	width: 90%;
	padding: 12px;
	font-weight: 600;
	border: 1px solid #dddddd;
	z-index: 9999;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	gap: 8px;
	color: white;
	font-size: 18px;
`;

export default BottomSheet;
