import styled from 'styled-components';
const Input = ({ input, handleChange, placeholder, submit }) => {
	return (
		<>
			<Form onSubmit={submit}>
				<input
					type='text'
					value={input}
					onChange={handleChange}
					placeholder={placeholder}
				/>
				<Button type='submit'>Submit</Button>
			</Form>
		</>
	);
};

const Button = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 3rem;
	cursor: pointer;
	border: none;
	border-radius: 8px;
	outline: none;
	color: white;
	font-size: 1rem;
	font-weight: 500;
	background-color: var(--primary-color);
	cursor: pointer;
`;
const Form = styled.form`
	display: flex;
	text-align: center;
`;

export default Input;
