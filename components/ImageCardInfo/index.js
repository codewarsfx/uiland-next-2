import React from "react";
import styled from "styled-components";
import { Button } from "../uiElements";
import { buttonTypes } from "../uiElements/button";

function ImageCardInfo({
  headerInfo,
  id,
  getAlbumId,
  handleAddToBookMark,
  handleDeleteFromBookMark,
  toggleModal,
}) {
  return (
    <>
      <ImageCardInfoWrapper>
        <h1>{headerInfo.name}</h1>
        <ImageCardWrapper>
          {!getAlbumId?.includes(id) ? (
            <Button type={buttonTypes.bookmark} onClick={handleAddToBookMark}>
              <img
                src="/assets/img/bookmark-dark.svg"
                alt="bookmark icon"
                className={`effect scale_transition`}
              />
            </Button>
          ) : (
            <Button
              type={buttonTypes.bookmark}
              onClick={handleDeleteFromBookMark}
            >
              <img
                src="/assets/img/bookmark-transparent.png"
                alt="bookmark icon"
                className="effect"
              />
            </Button>
          )}
        </ImageCardWrapper>
        <div className="flex-col">
          <div>
            <h1 className="font_medium">
              <a
                href={headerInfo.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                Visit Website
              </a>
            </h1>
          </div>
          <div className="button_modal" onClick={toggleModal}>
            <img src="/assets/img/share-icon.svg" alt="share-icon" />
            <div>Share</div>
          </div>
        </div>
      </ImageCardInfoWrapper>
    </>
  );
}
const ImageCardInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;

  flex-direction: column;
  padding: 24px;
  background: #dddddd;

  & > h1 {
    font-size: 1.8rem;
  }
`;
const ImageCardWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  gap: 12px;
  flex-direction: column;
  padding: 14px;
  background: #dddddd;
`;

export default ImageCardInfo;
