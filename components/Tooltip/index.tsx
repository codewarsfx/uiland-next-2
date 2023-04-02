import styled from 'styled-components';
import React from 'react';
const Tooltip = () => {
	return (
		<>
			<TooltipWrapper>
				<TooltipBody>
					<TooltipTop>
						Try out the Like and Download Image features Plus Copy and Paste the
						Image to Figma
					</TooltipTop>
					<TooltipBottom></TooltipBottom>
				</TooltipBody>
			</TooltipWrapper>
		</>
	);
};

const TooltipWrapper = styled.div`
	position: absolute;
	top: -59px;
	display: block;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	right: 50%;
	left: 50%;
	width: 100%;
`;
const TooltipBody = styled.div`
	padding: 36px;
	width: 100%;
	background: white;
	border-radius: 20px;
	border-top: 1px solid #cdcdd2;
	border-right: 1px solid #cdcdd2;
	border-left: 1px solid #cdcdd2;
`;
const TooltipTop = styled.div`
	background: white;
	text-align: center;
	font-weight: 500;
`;
const TooltipBottom = styled.div`
	background: white;
	height: 24px;
	width: 24px;
	position: absolute;
	bottom: -7px;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
	left: 50%;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
`;

export default Tooltip;
