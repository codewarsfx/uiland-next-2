import React from 'react'

function ImageCardInfo({headerInfo,id,getAlbumId,handleAddToBookMark,handleDeleteFromBookMark,toggleModal}) {
    
  return (
 <>
      <div className="album-card__dope">
              <h1>{headerInfo.name}</h1>
              <div className="album-card__doper">
                {!getAlbumId?.includes(id) ? (
                  <button
                    className="btn btn-border btn-border--album "
                    onClick={handleAddToBookMark}
                  >
                    <img
                          src="/assets/img/bookmark-dark.svg"
                          alt="bookmark icon"
                      className={`album-card__imgj album-card__dopi`}
                    />
                  </button>
                ) : (
                  <button
                    className="btn btn-border btn-border--album "
                    onClick={handleDeleteFromBookMark}
                  >
                    <img src="/assets/img/bookmark-transparent.png"
              alt="bookmark icon" className="album-card__imgj" />
                  </button>
                )}
              </div>
              <div className="album-card__wrappers">
                <div>
                  <h1 className="album-card__link">
                    <a
                      href={headerInfo.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Visit Website
                    </a>
                  </h1>
                </div>
                <div className="album-card__buttoncopy" onClick={toggleModal}>
                  <img src="/assets/img/share-icon.svg" alt="share-icon"/>
                  <div>Share</div>
                </div>
             
              </div>
            </div></>
  )
}

export default ImageCardInfo