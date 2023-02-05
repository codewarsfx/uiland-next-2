import React, { useEffect } from 'react';
import styled from 'styled-components';
import Lottie from "lottie-react";
import pendingDownload from "../../public/assets/json/pendingDownload.json";
import completedDownload from "../../public/assets/json/completedDownload.json";
function Toast({ Progress, pendingText, successText }) {
	return (
		<>
			{/* hides the toast if Progress state is 1 */}
			{Progress !== 1 && (
				<ToastWrapper>
					{/* shows the lottie json if it is completed or pending */}
				{	Progress == 2 ?<SmallCircle><Lottie animationData={pendingDownload} loop={true} /></SmallCircle>:<SmallCircle><Lottie animationData={completedDownload} loop={true} /></SmallCircle>}
					{Progress == 2 ? (
						<ToastTitle>{pendingText}</ToastTitle>
					) : Progress == 3 ? (
						<ToastTitle>{successText}</ToastTitle>
					) : (
						''
					)}
				</ToastWrapper>
			)}
		</>
	);
}
const SmallCircle = styled.div`
	height: 38px;
	width: 38px;
	margin-right: 5px;
	background: #dddddd;
	border-radius: 50%;
`;
// const BigCircle = styled.div`
// 	height: 50px;
// 	width: 50px;
// 	margin-right: 5px;
// 	background: #dddddd;
// 	border-radius: 50%;
// `;
const ToastWrapper = styled.div`
	position: fixed;
	display: block;
	background: white;
	bottom: 15px;
	right: 12px;
	padding: 6px 16px;
	border-radius: 12px;
	border: 1px solid #dddddd;
	z-index: 999;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const ToastTitle = styled.div`
	font-size: 20px;
	color: #000;
	font-weight:500;
`;
export default Toast;
