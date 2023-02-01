import styled from 'styled-components';
import CloseIcon from '../CloseModalIcon';

const AddToBookmark = ({
	newtoggleModal,
	submit,
	handleChange,
	bookmarkk,
	selectBookmark,
	input,
	disabled,
}) => {
	return (
		<Wrapper>
			<ModalHeader>
				<CloseIcon toggle={newtoggleModal} />
				<h2> Add to Collection </h2>
			</ModalHeader>
			<ModalBottom>
				<Title>Choose an existing Collection</Title>
				<form onSubmit={submit}>
					<div className='form-element-group'>
						<select
							className='form-element'
							name='collections'
							id='collections'
							value={bookmarkk}
							onChange={handleChange}
						>
							<option value='none' selected disabled hidden>
								Choose an existing collection
							</option>
							{selectBookmark.map((item, i) => {
								return (
									<option value={item} key={i}>
										{item}
									</option>
								);
							})}
						</select>
					</div>
					<div className='form-element-group'>
						<input
							type='text'
							className='form-element'
							placeholder='Enter collection name...'
							value={input}
							onChange={handleChange}
							name='contentForm'
							autoComplete='off'
						/>
					</div>
					<button className='form__button' disabled={disabled}>
						Continue
					</button>
				</form>
			</ModalBottom>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: white;
	/* height: 50vh; */
	padding: 0.5em;
	width: 90%;
	max-width: 600px;
	border-radius: 0.5em;
	@media (min-width: 760px) {
		border-radius: 1em;
	}
`;

const ModalHeader = styled.div`
	border-bottom: 1px solid #eee;
	display: flex;
	align-items: center;
	padding: 1em;
	h2 {
		font-size: 16px;
		text-align: center;
		font-weight: 500;
		width: 80%;
		color: var(--primary-text-black);
	}
`;

const ModalBottom = styled.div`
	padding: 0 2em;
	.form-element-group {
		width: 100%;
		margin: auto;
		border: 1.5px solid #ccc;
	}
	.form-element-group:first-child {
		border-radius: 0.3em 0.3em 0 0;
		border-bottom: none;
	}
	.form-element-group:last-child {
		border-radius: 0 0 0.3em 0.3em;
	}
	.form-element {
		width: 100%;
		padding: 1.5em;
		border: none;
		::placeholder {
			font-size: 16px;
		}
		:focus {
			outline-color: black;
		}
	}
`;

const Title = styled.h1`
	font-weight: 500;
	font-size: 20px;
	margin: 1em 0;
	@media (min-width: 760px) {
		margin: 1.5em 0;
	}
`;

const FormButton = styled.button`
	background: linear-gradient(to right, #0066f5 0%, #0458cd 50%, #1f539d 100%);
	border: none;
	padding: 1.5em;
	color: white;
	margin: 20px 0 30px;
	border-radius: 0.5em;
	cursor: pointer;
	width: 100%;
	font-weight: 500;
`;

export default AddToBookmark;
