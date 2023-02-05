import { FiFacebook } from 'react-icons/fi';
import { AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';
import styled, { keyframes } from 'styled-components';

const Footer = () => {
	return (
		<FooterWrapper>
			<AbsoluteGrid>
				<AbsoluteGridFirst>
					<Grid>
						<BlurEdges></BlurEdges>
					</Grid>
				</AbsoluteGridFirst>
			</AbsoluteGrid>
			<div className='wrapper footer-wrapper'>
				<div className='logo'>
					<div>
						<img src='assets/img/UL.png' alt='' />
					</div>
					<section className='footer-icons'>
						<FiFacebook className='footer-icon' />
						<AiOutlineYoutube className='footer-icon' />
						<CiTwitter className='footer-icon' />
						<AiOutlineInstagram className='footer-icon' />
					</section>
				</div>

				<section className='footer-links'>
					<ul className='link-items'>
						<li>
							<a href='#0'>Home</a>
						</li>
						<li>
							<a href='/pricing' target='_blank'>
								Pricing
							</a>
						</li>
						<li>
							<a href=''>Products</a>
						</li>
						<li>
							<a href='#'>About Us</a>
						</li>
					</ul>
					<ul className='link-items'>
						<li>
							<a href='/terms' target='_blank'>
								Terms and Conditions
							</a>
						</li>
						<li>
							<a href='/refund' target='_blank'>
								Return Policy
							</a>
						</li>
						<li>
							<a href='#'>Privacy Policies</a>
						</li>
					</ul>
				</section>

				<section className='form'>
					<form action='#'>
						<div className='form-input'>
							<input
								type='text'
								className='form-input-control'
								placeholder='Updates in your inbox...'
							/>
							<button type='submit'>Go</button>
						</div>
					</form>
				</section>
			</div>
		</FooterWrapper>
	);
};
const BlurEdges = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 11;
	background: radial-gradient(
		ellipse at 50% 50%,
		rgba(14, 20, 22, 0) 0,
		#0e1416 80%
	);
`;
const Grid = styled.div`
	position: relative;
	width: 100%;
	height: 500%;
	background-image: linear-gradient(
			90deg,
			hsla(0, 0%, 100%, 0.3) 1px,
			transparent 0
		),
		linear-gradient(180deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);
	background-size: 45px 35px;
	background-repeat: repeat;
	transform-origin: 100% 0 0;

	animation-duration: 15s;
	animation-timing-function: linear;
	animation-delay: 0s;
	animation-iteration-count: infinite;
	animation-direction: normal;
	animation-fill-mode: none;
	animation-play-state: running;
	animation-name: moveGrid;

	@keyframes moveGrid {
		from {
			transform: rotateX(45deg) translateZ(19px) translateY(-9px) skewY(10deg);
		}
		to {
			transform: rotateX(45deg) translateZ(19px) translateY(-500px) skewY(10deg);
		}
	}
`;

const AbsoluteGrid = styled.div`
	position: absolute;
	width: 100%;
	background: black;
	height: 100%;
	left: 0;

	right: 0;
`;
const AbsoluteGridFirst = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: 10;
	perspective: 450px;
`;
const FooterWrapper = styled.footer`
	position: relative;
	background-color: rgb(9, 9, 9);
	color: rgb(255, 255, 255);
	padding: 2em;
	margin-top: 7em;
	z-index: 123;
	position: relative;

	.footer-icon {
		font-size: 24px;
		margin-right: 15px;
	}

	.wrapper {
		width: 90%;
		margin: auto;
	}

	.form-input {
		display: flex;
		justify-content: center;
	}

	.form-input input,
	.form-input button {
		padding: 1em 2em;
		border-radius: 25px;
		border: none;
	}

	.form-input button {
		margin-left: 1em;
		background-color: var(--primary-color);
		color: #fff;
		font-weight: bold;
	}

	.form-input input::placeholder {
		font-family: inherit;
	}

	footer a {
		text-decoration: none;
		color: #fff;
		font-size: 1.4rem;
		font-family: inherit;
	}

	.footer-links {
		display: flex;
		justify-content: space-around;
		width: 60%;
		margin: 2em auto;
	}

	.footer-links li {
		margin: 0.4em 0;
		list-style: none;
		margin-top: 1.2em;
		font-weight: 500;
	}

	.attribution {
		text-align: center;
	}

	.footer-icons {
		margin: 5em auto 0;
		display: flex;
		width: 100%;
		justify-content: space-around;
	}

	.footer-wrapper {
		display: flex;
		align-items: center;
		width: 85%;
		z-index: 123;
		position: relative;
	}

	@media (max-width: 760px) {
		.footer-wrapper {
			flex-direction: column;
			width: 100%;
		}
		footer {
			padding: 2em 0;
		}

		.footer-links {
			width: 90%;
			order: 2;
			margin: 4em;
		}

		.logo {
			order: 3;
			display: flex;
			flex-direction: column;
			width: 60%;
			text-align: center;
			width: 75%;
		}

		.logo .footer-icons img {
			transform: scale(1.3);
		}

		.footer-icons {
			order: -1;
			margin: 0 0 2.5em;
		}

		.form {
			order: -1;
		}
	}
`;

export default Footer;
