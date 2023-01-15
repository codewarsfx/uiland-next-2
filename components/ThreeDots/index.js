import React from 'react'
import styled from 'styled-components'
function ThreeDots({openBottomSheet}) {
  return (
    <Container onClick={openBottomSheet}>
     <Dots></Dots>
     <Dots></Dots>
     <Dots></Dots>
    </Container>
  )
}
const Container=styled.div`
display:flex;
flex-direction:row;
gap:6px;
cursor:pointer;
padding: 7px 12px 7px 0px;
`
const Dots=styled.div`
background:black;
height:12px;
width:12px;
border-radius:100%;
`
export default ThreeDots