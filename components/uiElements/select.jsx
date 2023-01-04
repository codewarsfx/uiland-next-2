import React from 'react'
import styled from 'styled-components';
function Select({submitFilter,inputFilter,handleInputFilter,elementsCategoryData}) {
  return (
    <>
      <FilterBox>
        {" "}
        <form onSubmit={submitFilter}>
        <div class="select">
          <select id="standard-select" value={inputFilter} onChange={handleInputFilter}>
            {elementsCategoryData.map((item, i) => {
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
      </FilterBox></>
  )
}


const FilterBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
export default Select