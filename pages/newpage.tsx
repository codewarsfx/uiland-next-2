/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
function newpage() {
	return (
		<LandingPage>
			<div className='landingpage__container'>
				<div className='landingpage__row'>
					<div className='landingpage__col landingpage__col-50'>
						<div className='landingpage__text'>
							<div className='landingpage__text-h1'>
								Discover mobile UI used by the Nigeria's top companies
							</div>
							<div className='landingpage__text-h2 marg-tb-xs'>
								save hours of research time with UiLand's curated collection of
								the best in-production andriod interfaces and screenshots
							</div>
							<button className='landingpage__text-button'>
								<a href='/signup'>Start free</a>
							</button>
						</div>
					</div>
					<div className='landingpage__col landingpage__col-50'>
						<div className='outer-ring outer-ring1'>
							<div className='box box-outside'></div>
							<div className='outer-ring outer-ring2'>
								<div className='outer-ring outer-ring3'>
									<div className='outer-ring outer-ring4'>
										<div className='outer-ring outer-ring5'>
											<div className='outer-ring outer-ring6'>
												{/* <div className='outer-ring outer-ring7'>
												hhh
												</div> */}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</LandingPage>
	);
}
const LandingPage = styled.div`
	background-color: #0066f5;
	padding: 50px 0;
	overflow: hidden;

	.outer-ring {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		border-radius: 50%;
		border: 1px solid white;
		background-color: transparent;
	}
	.outer-ring1 {
		height: 550px;
		width: 550px;
		animation: spin1 12s linear infinite;
	}
	.outer-ring1::before {
		height: 50px;
		width: 50px;
		content: '';
		background: url(/assets/img/paystack.png);
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		bottom: -31px;
	}
	.outer-ring2::before {
		height: 60px;
		width: 60px;
		content: '';
		position: absolute;
		left: -31px;
		background: url(/assets/img/flutterwave.png);
		background-repeat: no-repeat;
		background-size: cover;
		animation: spin2 12s linear infinite;
	}
	.outer-ring3::before {
		height: 50px;
		width: 50px;
		content: '';
		position: absolute;
		right: -31px;
		background: url(/assets/img/zenith.png);
		background-repeat: no-repeat;
		background-size: cover;
		animation: spin 12s linear infinite;
	}
	.outer-ring4::before {
		height: 50px;
		width: 50px;
		content: '';
		position: absolute;
		bottom: -31px;
		background: url(/assets/img/airtel.png);
		background-repeat: no-repeat;
		background-size: cover;
		animation: spin 12s linear infinite;
	}
	.outer-ring5::before {
		height: 50px;
		width: 50px;
		content: '';
		position: absolute;
		top: -31px;
		background: url(/assets/img/kuda.svg);
		background-repeat: no-repeat;
		background-size: cover;
		animation: spin 12s linear infinite;
	}
	.outer-ring6::before {
		height: 50px;
		width: 50px;
		content: '';
		position: absolute;
		left: -31px;
		background: url(/assets/img/okra.png);
		background-repeat: no-repeat;
		background-size: cover;
		animation: spin 12s linear infinite;
	}
	/* .outer-ring7::before {
		height: 25px;
		width: 25px;
    content:'';
    position:absolute;
    top:-31px;
    background: white;border-radius:50%;
    animation: spin 12s linear infinite;

    
	} */

	.outer-ring2 {
		height: 450px;
		width: 450px;
	}
	.outer-ring3 {
		height: 350px;
		width: 350px;
	}
	.outer-ring4 {
		height: 250px;
		width: 250px;
	}
	.outer-ring5 {
		height: 150px;
		width: 150px;
	}
	.outer-ring6 {
		height: 50px;
		width: 50px;
	}
	.outer-ring7 {
		height: 5px;
		width: 5px;
	}

	/* .outer-ring8 {
		height: 200px;
		width: 200px;
	} */

	@keyframes spin1 {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes spin2 {
		0% {
			transform: rotate(60deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.landingpage__container {
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
	}

	@media (min-width: 576px) {
		.landingpage__container {
			max-width: 864px;
		}
	}

	@media (min-width: 992px) {
		.landingpage__container {
			max-width: 1076px;
		}
	}

	@media only screen and (min-width: 64em) {
		.landingpage__container {
			max-width: 1140px;
		}
	}
	.landingpage__row {
		flex-direction: column-reverse;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin-right: -15px;
		margin-left: -15px;
		justify-content: center;
	}
	@media only screen and (min-width: 62em) {
		.landingpage__row {
			display: -ms-flexbox;
			display: flex;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			margin-right: -15px;
			margin-left: -15px;
			flex-direction: row;
			justify-content: center;
		}
	}
	.landingpage__col {
		position: relative;
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
	}
	.landingpage__col-50 {
		max-width: 100%;
		flex: 0 0 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media only screen and (min-width: 62em) {
		.landingpage__col-50 {
			max-width: 50%;
			flex: 0 0 50%;
		}
	}
	.landingpage__text-button {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-align-items: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		padding: 1rem 1.3rem;
		cursor: pointer;
		border: none;
		border-radius: 5px;
		outline: none;
		color: #1e4573;
		font-size: 1.5rem;
		font-weight: 400;
		background-color: white;
	}
	.landingpage__text-button a {
		color: #1e4573;
	}
	.landingpage__text-h1 {
		font-size: 3.2rem;
		line-height: 1.3;
		color: white;
		font-weight: 600;
	}
	.landingpage__text-h2 {
		font-size: 1.4rem;
		color: white;
		line-height: 1.4;
	}
	.landingpage__text {
		display: flex;
		flex-direction: column;
		gap: 16px;
		align-items: flex-start;
	}
	@media only screen and (max-width: 992px) {
		.landingpage__text {
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			flex-direction: column;
		}
		.landingpage__text-h1 {
			font-size: 4.8rem;
			margin-top: 1.2rem;
			color: white;
			font-weight: 600;
			line-height: 1.13;
		}
		.landingpage__text-h2 {
			font-size: 1.2rem;
		}
	}
	@media only screen and (max-width: 600px) {
		.landingpage__text-h1 {
			font-size: 2.5rem;
			margin-top: 1.2rem;
			color: white;
			font-weight: 600;
			line-height: 1.13;
		}
	}
`;

export default newpage;
