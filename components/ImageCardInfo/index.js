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
            <BookmarkButton  onClick={handleAddToBookMark}>
              <img
                src="/assets/img/bookmark-dark.svg"
                alt="bookmark icon"
                className={`effect scale_transition`}
              />
            </BookmarkButton>
          ) : (
            <BookmarkButton
              onClick={handleDeleteFromBookMark}
            >
              <img
                src="/assets/img/bookmark-transparent.png"
                alt="bookmark icon"
                className="effect"
              />
            </BookmarkButton>
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
const BookmarkButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;
  cursor: pointer;
  border: none;
  border-radius: 9px;
  outline: none;
  color: white;
  font-size: 2rem;
  font-weight: 500;
  background-color: #c6c8d1;

  &:hover {
    background-color: grey;
  }

  &:focus {
    outline: none;
  }
`;
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
