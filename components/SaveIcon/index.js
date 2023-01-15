import React from 'react'
import styled from 'styled-components';
function SaveIcon({bookmark,data}) {
  return (
    <>
      <DownloadWrapper
                  onClick={() => bookmark(data)}
                >
                  <Title className="target" title="save to collection">
                    <img src="/assets/img/heart-empty.png" alt="like icon" />
                  </Title>
                </DownloadWrapper></>
  )
}
const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px 0px;
`;
const Title = styled.div`
cursor:pointer;
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  padding: 5px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.17);
  svg {
    width: 23px;
    height: 23px;
    vertical-align: middle;
  }
  img {
    height: 30px;
    width: 100%;
    transition: all 0.5s ease-out;
  }
`;
export default SaveIcon