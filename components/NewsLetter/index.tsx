import { ChangeEvent, ChangeEventHandler, FormEvent, useReducer } from 'react';
import styled from 'styled-components';
import { addUserData } from '../../supabase';
import { ModalBottom, ModalHeader, Title, Wrapper } from '../AddToBookmark';
import CloseIcon from '../CloseModalIcon';
import { Player } from '@lottiefiles/react-lottie-player';

//reducers
const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'email':
			return { ...state, email: { ...state.email, value: payload } };
		case 'feedback':
			return { ...state, feedback: { ...state.feedback, value: payload } };
		case 'defaultemail':
			return { ...state, email: { submitted: true, value: '' } };
		case 'defaultfeedback':
			return { ...state, feedback: { submitted: true, value: '' } };
	}
};

//animation variables
const dropIn = {
	hidden: {
		y: '-10vh',
		opacity: 0,
	},
	visible: {
		y: '0vh',
		opacity: 1,
		transition: {
			delay: 0.2,
		},
	},
};

const NewsLetter = ({ toggleModal }) => {
	const initialState = {
		email: {
			submitted: false,
			value: '',
		},
		feedback: {
			submitted: false,
			value: '',
		},
	};

	const [inputState, dispatch] = useReducer(reducer, initialState);

	const handleInputChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
		dispatch({
			type: e.target.name,
			payload: e.target.value,
		});
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>, type: 'EmailNewsLetter' | 'defaultemail'|'Feedback') => {
		e.preventDefault();
		let inputdata, defaultName;
		if (type === 'EmailNewsLetter') {
			inputdata = {
				email: inputState.email.value,
			};
			defaultName = 'defaultemail';
		} else if (type === 'Feedback') {
			inputdata = {
				feedback: inputState.feedback.value,
			};
			defaultName = 'defaultfeedback';
		}

		await addUserData(type, inputdata);
		dispatch({ type: defaultName });
	};

	return (
		<Wrapper variants={dropIn} initial='hidden' animate='visible'>
			<ModalHeader>
				<CloseIcon toggle={toggleModal} />
				<h2> Hi there, UiLander! </h2>
			</ModalHeader>
			<ModalBottomWrapper>
				<FormTitle>Join Our Newsletter</FormTitle>
				<Description>Be the first to know about out latest updates</Description>
				<form onSubmit={(e) => handleSubmit(e, 'EmailNewsLetter')}>
					<div className='form-element-group'>
						<input
							type='email'
							className='form-element'
							placeholder='Email address'
							name='email'
							autoComplete='off'
							value={inputState.email.value}
							onChange={handleInputChange}
							required={true}
						/>
					</div>
					<button className='form__button'>
						{' '}
						{inputState.email.submitted ? (
							<div className='wrap'>
								{' '}
								Subscribed{' '}
								<Player
									src='/assets/lottie/email.json'
									className='lottie lottie--top'
									autoplay
								/>
							</div>
						) : (
							'Subscribe'
						)}
					</button>
				</form>
				<hr className='rule' />
				<FormTitle>Leave a Feedback</FormTitle>
				<Description>Need Something Improved? drop a feedback</Description>
				<form onSubmit={(e) => handleSubmit(e, 'Feedback')}>
					<div className='form-element-group'>
						<textarea
							className='form-element'
							placeholder='thoughts...'
							name='feedback'
							autoComplete='off'
							value={inputState.feedback.value}
							onChange={handleInputChange}
							required={true}
						/>
					</div>
					<button className='form__button'>
						{inputState.feedback.submitted ? (
							<div className='wrap'>
								{' '}
								Submitted{' '}
								<Player
									src='/assets/lottie/sent.json'
									className='lottie'
									autoplay
								/>
							</div>
						) : (
							'Submit'
						)}
					</button>
				</form>
			</ModalBottomWrapper>
		</Wrapper>
	);
};
const ModalBottomWrapper = styled(ModalBottom)`
	.form-element-group {
		border: none;
		border-radius: 0px;
		margin: 1.5em 0 0.5em;
	}
	.form-element {
		border: 1px solid #ccc;
		border-radius: 0.5em;
	}
	.rule {
		border: 0.5px solid #eee;
		position: relative;
	}
	.form__button {
		position: relative;
	}

	.lottie {
		width: 50px;
		height: 50px;
		position: absolute;
		top: 0;
	}
	.lottie--top {
		transform: translateY(-10%);
	}

	.wrap {
		display: flex;
		justify-content: center;
	}
`;

const FormTitle = styled(Title)`
	margin: 1.5em 0 0.5em 0;
`;
const Description = styled.p`
	font-size: 16px;
	color: #777;
	margin: 0;
`;

export default NewsLetter;
