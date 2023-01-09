import React from 'react'
import styled from 'styled-components'
function EmptyState() {
  return (
    <EmptyContainer>
<div>So Empty :(</div>

    </EmptyContainer>
  )
}

const EmptyContainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
`

export default EmptyState