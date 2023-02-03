import React from 'react';
import styled from 'styled-components';
function Select({ inputFilter, handleInputFilter, elementsCategoryData }) {
	return (
		<>
			<FilterBox>
				{' '}
				<form>
					<div className='select'>
						<select
							id='standard-select'
							value={inputFilter}
							onChange={handleInputFilter}
						>
							<option value='none' >
								Filter Images
							</option>
							{elementsCategoryData.map((item: string, i: React.Key) => {
								return (
									<option value={item} key={i}>
										{item}
									</option>
								);
							})}
						</select>
					</div>
					{/* <button type="submit">Submit</button> */}
				</form>
			</FilterBox>
		</>
	);
}

const FilterBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export default Select;
