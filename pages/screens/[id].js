import React, { useContext, useEffect, useState } from "react";

//Next library
import { useRouter } from "next/router";
import Image from "next/image";

//Third party libraries
import styled from "styled-components";

//All Supabase endpoints
import {
  getAllScreens,
  getScreensById,
  addSingleScreens,
  DeleteSingleScreens,
  getScreensProperties,
  getAllSingleBookmarkNames,
  getAllSingleBookmarkId,
  DeleteScreens,
  getAlbumBookmarkId,
  addBookmark,
  viewSingleBookmark,
} from "../../supabase";

//Hooks
import useModal from "../../hooks/useModal";

//Context
import { UserContext } from "../../context/authContext";

// Components
import { BottomSheet, Toast } from "../../components/uiElements";
import ImageCardInfo from "../../components/ImageCardInfo";
import Modal from "../../components/modal";
import SocialsCard from "../../components/SocialsCard";
import Select from "../../components/uiElements/select";
import Login from "../../components/Login/login";
import ThreeDots from "../../components/ThreeDots";
import { mobileCheck } from "../../utils/isMobile";
export default function SinglePage({ screens }) {
  const {
    modalSaveImage,
    isModalopen,
    toggleModal,
    newtoggleModal,
    loginToggleModal,
    isModalLogin,
    toggleBottomSheet,
    modalSheet
  } = useModal();

  // state for the bottomsheet
  const [openBottomSheet, setOpenBottomSheet] = useState(false);

  //state for the image url
  const [imageUrl, setImageUrl] = useState("");

  const [displayBasic, setDisplayBasic] = useState(false);
  const [imageContent, setImageContent] = useState({});

  //state for the filter by category
  const [inputFilter, setInputFilter] = useState("");
  const [getId, setGetId] = useState([]);
  const [Progress, setProgress] = useState(1);
  const [headerInfo, setHeaderInfo] = useState({});

  //state to manage the bookmark id of the album of images when clicked
  const [getAlbumId, setGetAlbumId] = useState([]);

  // toast state
  const [toastPendingText, setToastPendingText] = useState("Saving");
  const [toastSuccessText, setToastSuccessText] = useState("Saved 🎉");

  const [bookmarkk, setBookmarkk] = useState("");
  //state to hold the input state
  const [input, setInput] = useState("");

  //to track if user is on mobile
  const [mobile, setMobile] = useState();
  //usecontext
  const user = useContext(UserContext);

  //state to hold the names of bookmarks created
  const [selectBookmark, setSelectBookmark] = useState([""]);

  //state to disable button
  const [disabled, setDisabled] = useState(false);

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };
  const router = useRouter();

  //filter
  const searchFilter = (array, data) => {
    if (data === "") return array;
    return array.filter((el) => el.elementCategory.toLowerCase() === data);
  };

  const filtered = searchFilter(screens, inputFilter);

  //the list of properties to filter by
  const elementsCategoryData = [
    "",
    "search",
    "card",
    "dialog",
    "skeleton",
    "tooltip",
    "bottom sheet",
    "divider",
    "input",
    "loading",
    "button",
    "toast",
    "radio button",
    "dropdown",
    "copy icon",
  ];
  function handleInputFilter(e) {
    //convert the e.target.value to lowercase and add to the inputfilter state
    setInputFilter(e.target.value.toLowerCase());
  }

  //omitting the [  ] here caused a massive render
  useEffect(() => {
    const getHeaderInfo = async () => {
      const result = await viewSingleBookmark("fishes");
      console.log(result);
      const data = await getScreensProperties(router.query.id);
      setHeaderInfo(data);
    };
    getHeaderInfo();
  }, [router.query.id]);

  //checker to empty the bookmark names select field if the user has deleted all his bookmarked images
  useEffect(() => {
    if (!getId) {
      setSelectBookmark([""]);
    }
  }, [getId]);

  // useEffect(()=>{
  //   const uniqueResult=([...new Set(selectBookmark)])
  //   setSelectBookmark(uniqueResult)
  //     },[selectBookmark])

  useEffect(() => {
    const isMobile = mobileCheck();
    setMobile(isMobile);
  }, []);

  //checker to disable the submit button if the user has not created a new bookmark name or selected a previous bookname
  useEffect(() => {
    if (!input) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [input]);

  useEffect(() => {
    const allBookmarkNames = async () => {
      const data = await getAllSingleBookmarkNames();
      const result = selectBookmark.concat(data);
      setSelectBookmark(result);
    };
    allBookmarkNames();
  }, []);

  //copies the url
  const copy = async () => {
    // copies the link and shows the toast
    setProgress(2);
    setToastPendingText("Copying");
    await navigator.clipboard.writeText(
      `http://localhost:3000/screens/${router.query.id}`
    );
    setToastSuccessText("Copied 🎉");
    setProgress(3);
    toastNotification(1);
  };

  //finds the ids of individual screens that have been bookmarked and stores in an array
  //I used it to indicate on the frontend what image have been saved
  useEffect(() => {
    async function getIndividualScreens() {
      if (user) {
        const data = await getAllSingleBookmarkId(user);
        console.log(data);
        data.forEach((item) => {
          setGetId((prev) => {
            return [...prev, item.screen_id];
          });
        });
      }
    }
    getIndividualScreens();
  }, [user]);

  //finds the ids of album screens that have been bookmarked and stores in an array
  //I used it to indicate on the frontend what image have been saved
  useEffect(() => {
    async function getBookmarkScreens() {
      if (user) {
        const data = await getAlbumBookmarkId(user);
        console.log(data);
        data.forEach((item) => {
          setGetAlbumId((prev) => {
            return [...prev, item.album_id];
          });
        });
      }
    }
    getBookmarkScreens();
  }, [user]);

  //used to hide hide the modal when clicked
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  //tracks changes in the input field
  function handleChange(e) {
    setInput(e.target.value);
  }

  //shows the modal and populates the imageContent state
  async function bookmark(data) {
    if (user) {
      newtoggleModal();
      console.log(data);
      setImageContent(data);
    } else {
      loginToggleModal();
    }
  }

  //function to delete individual screens
  async function deleteIndividualBookmark(data) {
    setProgress(2);
    setToastPendingText("Deleting");
    const deletedItem = await DeleteSingleScreens(data);
    console.log(deletedItem);
    if (deletedItem === null) {
      console.log(data.id);
      const filteredResult = getId.filter((result) => result !== data.id);
      console.log(filteredResult);
      setGetId(filteredResult);
      setToastSuccessText("Deleted :(");
      setProgress(3);
      toastNotification(1);
    }
  }

  useEffect(() => {
    console.log(input);
  }, [input]);
  //function to bookmark individual screen
  async function submit(e) {
    //prevents default refresh
    console.log(e);
    e.preventDefault();
    if (user) {
      console.log(user, imageContent, input);
      setProgress(2);
      setToastPendingText("Saving");
      const result = await addSingleScreens(imageContent, input, user);
      console.log(result);
      if (result) {
        setInput("");
        console.log(result[0].screen_id);
        getId.push(result[0].screen_id);

        // saves the image and shows the toast

        setToastSuccessText("Saved 🎉");
        setProgress(3);
        toastNotification(1);
        selectBookmark.push(input);
        newtoggleModal();
      }
    } else {
      console.log("pls login");
    }
  }

  //function to download the individual images
  async function downloadImage () {
    // const download = await fetch("/api/screenshot");
    // const data = await download.json();
    // console.log(data);

    setToastPendingText("Downloading...");

    //fetches the image
    const image = await fetch(imageUrl);
    console.log(image);

    //converts it to a blob
    const imageBlog = await image.blob();
    console.log(imageBlog);
    const imageURL = URL.createObjectURL(imageBlog);
    console.log(imageURL);

    //creates the a tag for download to happen <a download="image file name here" href="url"></a>
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "image file name here";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setToastSuccessText("Downloaded 🎉");
    setProgress(3);
    toastNotification(1);
  };

  async function copyImage() {
    //contains a url in this format
    // "http://localhost:3000/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fuiland.appspot.com%2Fo%2FCowrywise%252FCowrywise-screens%252FScreenshot_2022-10-13-14-46-21-882_com.cowrywise.android-min.jpg%3Falt%3Dmedia%26token%3D3efdba80-8ec5-463a-9466-317f9247a6c3&w=1080&q=75"
    //which contains the prefetched images
    // This prevents cors error while getting the images
    console.log("active")
    setProgress(2);
    setToastPendingText("Saving");
    const response = await fetch(imageUrl);
    console.log(response)
    const blob = await response.blob();

    navigator.clipboard.write([
      new window.ClipboardItem({
        [blob.type]: blob,
      }),
    ]);
    setToastSuccessText("Copied Image");
    setProgress(3);
    toastNotification(1);
  }

  //util for toast notification
  const toastNotification = (state) => {
    setTimeout(() => {
      setProgress(state);
    }, 3000);
  };

  //adds image album to bookmark
  async function handleAddToBookMark() {
    if (user) {
      setToastPendingText("Saving to collections 🎉");
      setProgress(2);
      const result = await addBookmark(router.query.id, user);
      console.log(result);
      if (result) {
        getAlbumId.push(router.query.id);
        console.log(getAlbumId);
        setToastSuccessText("Saved to collections 🎉");
        setProgress(3);
        toastNotification(1);
      }
    } else {
      //add modal later
      loginToggleModal();
    }
  }

  //deletes image album to bookmark
  async function handleDeleteFromBookMark() {
    setToastPendingText("Deleting from collections");
    setProgress(2);
    const result = await DeleteScreens(router.query.id);
    console.log(result);
    if (result === null) {
      setGetAlbumId([]);
      setToastSuccessText("Deleted from collections :(");
      setProgress(3);
      toastNotification(1);
    }
  }

  useEffect(() => {
    window.onresize = function () {
      const mobile = mobileCheck();
      setMobile(mobile);
    };
  }, []);

  function openBottomSheetModal(e) {
    console.log(e);
    setImageUrl(
      e.target.parentElement.parentElement.parentElement.children[0].children[0].children[1].currentSrc
    );
    console.log(
      e.target.parentElement.parentElement.parentElement.children[0].children[0].children[1].currentSrc
    );
    if(mobile){
      setImageUrl(
        e.target.parentElement.parentElement.parentElement.children[0].children[0].children[1].currentSrc
      );
        setOpenBottomSheet(true);
    }else{
      setImageUrl(
        e.target.parentElement.parentElement.parentElement.children[0].children[0].children[1].currentSrc
      );
      toggleBottomSheet();
      
    }
  
  }

  function closeBottomSheetModal() {
    setOpenBottomSheet(false);
  }

  return (
    <>
      {modalSheet && (
        <Modal toggleModal={toggleBottomSheet}>
          <ModalBox>
           <BottomsheetModal>
                  <div onClick={downloadImage}>Download Image</div>
<div onClick={copyImage}>Copy Image</div>
           </BottomsheetModal>
      
            
            
          </ModalBox>
        </Modal>
      )}
      {modalSaveImage && (
        <Modal toggleModal={newtoggleModal}>
          <ModalBox>
            <form onSubmit={submit}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px",
                }}
              >
                <b style={{ fontSize: "16px" }}>Create a Bookmark</b>
              </div>

              <div className="select">
                <select value={bookmarkk} onChange={handleChange}>
                  {selectBookmark.map((item, i) => {
                    return (
                      <option value={item} key={i}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <Input
                type="text"
                name="contentForm"
                placeholder="Input Name"
                maxlength="50"
                autocomplete="off"
                value={input}
                onChange={handleChange}
              />

              <button
                className={`album-card__buttoncopy`}
                type="submit"
                disabled={disabled}
              >
                Submit
              </button>
            </form>
          </ModalBox>
        </Modal>
      )}
      {isModalopen && (
        <Modal toggleModal={toggleModal}>
          <ModalBox>
            <SocialsCard id={router.query.id} copy={copy} />
          </ModalBox>
        </Modal>
      )}
      {isModalLogin && (
        <Modal toggleModal={loginToggleModal}>
          <Login toggleModal={loginToggleModal} />
        </Modal>
      )}
    
        <BottomSheet
        openBottomSheet={openBottomSheet}
          closeBottomSheetModal={closeBottomSheetModal}
          downloadImage={downloadImage}
          copyImage={copyImage}
        />
    
      <SingleHeader>
        <ImageCardInfo
          copy={copy}
          headerInfo={headerInfo}
          id={router.query.id}
          getAlbumId={getAlbumId}
          handleAddToBookMark={handleAddToBookMark}
          handleDeleteFromBookMark={handleDeleteFromBookMark}
          toggleModal={toggleModal}
        />
      </SingleHeader>

      <Select
        elementsCategoryData={elementsCategoryData}
        inputFilter={inputFilter}
        handleInputFilter={handleInputFilter}
      />
      <ElementsInCategoryContainer>
        {/* todo:populate with filtered data */}
        {filtered?.map((data) => (
          <ScreenShotContent key={data.id}>
            <ScreenshotContainer onClick={copyImage}>
              <Image
                src={data.url}
                alt="imageSelected"
                width={1080}
                height={2240}
              />
            </ScreenshotContainer>

            <SecondRow>
              {getId.includes(data.id) ? (
                <DownloadWrapper
                  className="target"
                  onClick={() => deleteIndividualBookmark(data)}
                >
                  <Title className="target" title="delete from collection">
                    <img src="/assets/img/heart-filled.png" alt="delete icon" />
                  </Title>
                </DownloadWrapper>
              ) : (
                <DownloadWrapper
                  className="target"
                  onClick={() => bookmark(data)}
                >
                  <Title className="target" title="save to collection">
                    <img src="/assets/img/heart-empty.png" alt="like icon" />
                  </Title>
                </DownloadWrapper>
              )}
              <ThreeDots openBottomSheet={openBottomSheetModal} />
            </SecondRow>
          </ScreenShotContent>
        ))}
      </ElementsInCategoryContainer>
      <Toast
        Progress={Progress}
        pendingText={toastPendingText}
        successText={toastSuccessText}
      />

     
    </>
  );
}
const BottomsheetModal =styled.div`
display:flex;
flex-direction:column;
gap:8px;
align-items:center;
justify-content:center;
color:black;
font-size:20px;
`
const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Input = styled.input.attrs()`
  color: black;
  font-size: 1em;
  border: 1px solid grey;
  border-radius: 6px;
  margin-top: 14px;
  width: 100%;
  padding: 12px;
`;
const ScreenShotContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const ModalBox = styled.div`
  width: 80%;

  background-color: #fff;
  max-width: 37.5rem;
  padding: 1.6rem;
  border-radius: 0.5rem;
`;

const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px 16px;
`;
const CopyWrapper = styled.div`
  position: absolute;
  block: "";
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 7px 16px;
  align-items: flex-start;
  top: 10px;
  right: 18px;
  border-radius: 2em;
  visibility: hidden;
`;

const AbsoluteBox = styled.div`
  position: absolute;
  block: "";
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 7px 16px;
  align-items: flex-start;
  top: 10px;
  right: 54px;
  border-radius: 2em;
  visibility: hidden;
`;
const ScreenshotContainer = styled.div`
  border-radius: 0.8em;
  background: linear-gradient(to bottom, white 99%, black 1%);
  overflow: auto;
  border: 1px solid #dce0f1;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  user-select: none;
  &:hover .target {
    visibility: visible;
  }
  img {
    pointer-events: none;
  }
`;

const Title = styled.h1`
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
const SingleHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  gap: 8px;
`;

const WebLink = styled.a`
  font-weight: 200;
  font-size: 1.3rem;
  text-decoration: none;
  color: var(--primary-color);
`;
const ElementsInCategoryContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 1.5em auto;
  gap: 20px;
  width: 90%;
  @media (min-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    width: 95%;
    margin: 3em auto;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const getStaticPaths = async () => {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  // Call an external API endpoint to get posts
  const screen = await getAllScreens();

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = screen.map((post) => ({
    params: { id: post.id },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const screens = await getScreensById(id);
  return {
    props: { screens },
  };
};
