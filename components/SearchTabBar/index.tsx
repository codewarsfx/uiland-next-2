import React, { useState, useContext,useEffect } from 'react';
import styled from 'styled-components';
import { Input } from '../uiElements';
import { ScreensContext } from '../../context/screensContex';

const SearchTabBar = () => {
	const { setFilterItemName } = useContext(ScreensContext);
	const [input, setInput] = useState('');

	/**
	 * @description returns the data to input state
	 * @param {Object}
	 * @param {String}
	 * @returns {None}
	 */
	function handleChange(e) {
		setInput(e.target.value);
	}

	function submit(e) {
		e.preventDefault();
		const lowerCaseAll = input.toLowerCase();
		const firstInputCapitalized =
			lowerCaseAll.charAt(0).toUpperCase() + lowerCaseAll.slice(1);
		setFilterItemName(firstInputCapitalized);
	}


	return (
		<FormWrapper>
			<FormBackground>
				<Input
					input={input}
					handleChange={handleChange}
					submit={submit}
					placeholder="search company's name"
				/>
			</FormBackground>
		</FormWrapper>
	);
};

const FormWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 15px;
`;
const FormBackground = styled.div`
	padding: 12px;
	background: #fff;
	border: 1px solid #dddddd;
	border-radius: 40px;
	input {
		border: 0;
		font-size: 16px;
		overflow: hidden;
		padding: 10px 12px;
		transition-duration: 0.3s;
		transition-property: color;
		text-overflow: ellipsis;
		z-index: 1;
		margin: auto;
		width: 100%;
		border-radius: 8px;
		font-weight: 500;
		&:focus {
			box-shadow: none;
			border: none;
			outline: none;
		}
	}
`;

export default SearchTabBar;
