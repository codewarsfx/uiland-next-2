import { FiFacebook } from 'react-icons/fi';
import { AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';
import styled from 'styled-components';

const Footer = () => {
	return (
		<FooterWrapper>
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
							<a href='/' >Home</a>
						</li>
						<li>
							<a href='/pricing' target="_blank">Pricing</a>
						</li>
						<li>
							<a href='/'>Products</a>
						</li>
						<li>
							<a href='#'>About Us</a>
						</li>
					</ul>
					<ul className='link-items'>
						<li>
							<a href='/terms' target="_blank">Terms and Conditions</a>
						</li>
						<li>
							<a href='/refund' target="_blank">Return Policy</a>
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

const FooterWrapper = styled.footer`
	background-color: rgb(9, 9, 9);
	color: rgb(255, 255, 255);
	padding: 2em;
	margin-top: 7em;

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
		margin-top: 1.2em;font-weight:500;
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
