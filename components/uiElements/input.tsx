import { useEffect } from 'react';
import styled from 'styled-components';
const Input = ({ input, handleChange, placeholder, focusClass }) => {
	
	


	return (
		<>
			<Form>
				<input
					type='text'
					value={input}
					onChange={handleChange}
					placeholder={placeholder}
					id={focusClass}
				/>
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
	border-radius: 40px;
	outline: none;
	color: white;
	font-size: 1rem;
	font-weight: 500;
	background-color: var(--primary-color);
	cursor: pointer;
	transition: all 0.1s ease-out;
	:hover {
		background-color: var(--primary-color-hover);
	}
`;
const Form = styled.form`
	display: flex;
	text-align: center;

`;

export default Input;
