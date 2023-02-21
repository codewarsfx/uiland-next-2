import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Input } from '../uiElements';
import { ScreensContext } from '../../context/screensContex';
import { BsCommand } from 'react-icons/bs';

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

	useEffect(() => {
		//debouncing the search input when typing
		const getData=setTimeout(()=>{
			const lowerCaseAll = input.toLowerCase();
			//capitalize the first letter to match the database
		const firstInputCapitalized =
			lowerCaseAll.charAt(0).toUpperCase() + lowerCaseAll.slice(1);
		setFilterItemName(firstInputCapitalized);
		},300)
		//Destroy the instance of the useEffect hook using return, followed by clearTimeout, every time it finishes.
		return ()=>clearTimeout(getData)
	}, [input, setFilterItemName]);

	useEffect(() => {
		let keysPressed = {};
		const keyDownEvent = document.addEventListener('keydown', (event) => {
			keysPressed[event.key] = true;
			if (
				(keysPressed['Meta'] && event.key == 'k') ||
				(keysPressed['Control'] && event.key == 'k')
			) {
				if (document.getElementById('focus-input') !== document.activeElement) {
					event.preventDefault();
					const inputElement = document.getElementById('focus-input');
					inputElement.focus();
					inputElement.parentElement.style.border = '1.5px solid #999';
					inputElement?.addEventListener('blur', () => {
						inputElement.parentElement.style.border = '1px solid #dddddd';
					});
				} else {
					return true;
				}
			}
		});
		return () => {
			window.removeEventListener('keydown', () => {
				console.log('event removed');
			});
		};
	}, []);

	return (
		<FormWrapper>
			<FormBackground>
				<input
					type='text'
					value={input}
					onChange={handleChange}
					placeholder="Search by brand's name..."
					id='focus-input'
				/>
				<Icon>
					<BsCommand />
				</Icon>
				<Icon>
					<span>k</span>
				</Icon>
			</FormBackground>
		</FormWrapper>
	);
};

const Icon = styled.div`
	display: flex;
	font-size: 15px;
	margin: 0 0 0 0.3em;
	color: #777;
	border: 1px solid #ddd;
	border-radius: 0.3em;
	padding: 0.5em;

	span {
		font-family: monospace;
	}
`;

const FormWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FormBackground = styled.div`
	padding: 12px;
	background: #fff;
	border: 1px solid #dddddd;
	border-radius: 0.5em;
	display: flex;
	align-items: center;
	input {
		overflow: hidden;
		border: none;
		padding: 10px 12px;
		text-overflow: ellipsis;
		width: 210px;
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
