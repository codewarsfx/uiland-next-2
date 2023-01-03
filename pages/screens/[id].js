import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

import {
  getindividualScreenData,
  addBookMark,
  getScreensData,
  deleteBookMark,
  queryBookMarkIndividual,
  bookmarkSelected,
  deleteBookmarkSelected,
  queryBookMarkAlbum,
  getIndividualCategory,
  queryScreenImage,
} from "../../firebase";

import { BrandLogo } from "../../components/uiElements";
import Header from "../../components/Header";
import useModal from "../../hooks/useModal";
import { UserContext } from "../../context/authContext";
import ImageCardInfo from "../../components/ImageCardInfo";
import Modal from "../../components/modal";
import SocialsCard from "../../components/SocialsCard";
export default function SinglePage({ screens }) {
  const { modalSaveImage, isModalopen, toggleModal,newtoggleModal } = useModal();

  const [displayBasic, setDisplayBasic] = useState(false);
  const [imageContent, setImageContent] = useState({});
  const [inputFilter, setInputFilter] = useState("");
  const [getId, setGetId] = useState([]);
  const [hideAllUnfilteredImages, setHideAllUnfilteredImages] = useState([]);

  const [headerInfo, setHeaderInfo] = useState({});
  const [getAlbumId, setGetAlbumId] = useState([]);

  const [input, setInput] = useState("BookmarkImage");
  const user = useContext(UserContext);

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };
  const router = useRouter();

  const searchFilter = (array, data) => {
    if (data === "") return array;
    return array.filter((el) => el.elementCategory.toLowerCase() === data);
  };

  const filtered = searchFilter(screens, inputFilter);

  useEffect(() => {
    screens.sort(function (a, b) {
      const nameA = a.screenCategory.toLowerCase(); // ignore upper and lowercase
      const nameB = b.screenCategory.toLowerCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }, [screens]);

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

  useEffect(() => {
    const getHeaderInfo = async () => {
      const data = await getindividualScreenData(router.query.id);
      setHeaderInfo(data);
    };
    getHeaderInfo();
  });

  //copies the url
  const copy = async () => {
    await navigator.clipboard.writeText(
      `http://localhost:3000/screens/${router.query.id}`
    );
  };

  //finds the ids of individual screens that have been bookmarked and stores in an array
  //I used it to indicate on the frontend what image have been saved
  useEffect(() => {
    async function getIndividualScreens() {
      if (user) {
        const data = await queryBookMarkIndividual(user.uid);
        data.forEach((item) => {
          setGetId((prev) => {
            return [...prev, item.id];
          });
        });
      }
    }
    getIndividualScreens();
  }, [user]);

  //finds the ids of albums of images that have been bookmarked and stores in an array
  //I used it to indicate on the frontend what image have been saved
  useEffect(() => {
    async function getAlbums() {
      if (user) {
        const data = await queryBookMarkAlbum(user.uid);
        data.forEach((item) => {
          setGetAlbumId((prev) => {
            return [...prev, item.id];
          });
        });
      }
    }
    getAlbums();
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
      newtoggleModal()
      setImageContent(data);
    } else {
      console.log("please login");
    }
  }

  //function to delete individual screens
  async function deleteIndividualBookmark(user, data) {
    await deleteBookmarkSelected(user, data);
  }

  //function to bookmark individual screen
  function submit(e) {
    //prevents default refresh
    e.preventDefault();
    if (user) {
      console.log(user, imageContent, input);
      bookmarkSelected(user, imageContent, input);
    } else {
      console.log("pls login");
    }
  }
  //function to filter individual screen
  async function submitFilter(e) {
    //prevents default refresh
    e.preventDefault();
    const data = await getIndividualCategory(inputFilter, router.query.id);
    console.log(data);
    setHideAllUnfilteredImages(data);
  }

  //function to download the individual images
  const downloadImage = async (e) => {
    // 	const download =await fetch("/api/hello",
    // 	{method:"POST",headers:{
    // 		"Content-Type":"application/json"
    // 	},body:JSON.stringify(e)}
    // 	);

    // 	const download = await fetch("/api/hello");
    // 		const data = await download.json();
    //  console.log(data)
    console.log(
      e.target.parentElement.parentElement.children[3].children[1].currentSrc
    );

    //fetches the image
    const image = await fetch(
      e.target.parentElement.parentElement.children[3].children[1].currentSrc
    );
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
  };

  async function copyImage(e) {
    //contains a url in this format
    // "http://localhost:3000/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fuiland.appspot.com%2Fo%2FCowrywise%252FCowrywise-screens%252FScreenshot_2022-10-13-14-46-21-882_com.cowrywise.android-min.jpg%3Falt%3Dmedia%26token%3D3efdba80-8ec5-463a-9466-317f9247a6c3&w=1080&q=75"
    //which contains the prefetched images
    // This prevents cors error while getting the images

    const response = await fetch(
      e.target.parentElement.children[3].children[1].currentSrc
    );
    const blob = await response.blob();
    navigator.clipboard.write([
      new window.ClipboardItem({
        [blob.type]: blob,
      }),
    ]);
    console.log("Image copied.");
  }

  //adds image album to bookmark
  function handleAddToBookMark() {
    if (user) {
      addBookMark(user.uid, router.query.id, screens);
    } else {
      //add modal later
      console.log("please login");
    }
  }

  //deletes image album to bookmark
  function handleDeleteFromBookMark() {
    deleteBookMark(user.uid, router.query.id);
  }
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
      {modalSaveImage && (
        <Modal toggleModal={newtoggleModal}>
           <div style={{ width: "50vw" }} onHide={() => onHide("displayBasic")}>
          <div>
            <form onSubmit={submit}>
              <label for="items">Choose a Bookmark:</label>
              <div class="select">
              <select id="standard-select" name="items" onChange={handleChange}>
                <option value="BookmarkImage">Bookmark Image</option>
              </select>
              </div>
              {/* <input type="text" name="contentForm" value={input} onChange={handleChange}/> */}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        </Modal>
       
      )}
{isModalopen && (
				<Modal toggleModal={toggleModal}>
				<ModalBox>
        <SocialsCard id={router.query.id} copy={copy}/>
        </ModalBox>
				</Modal>
			)}
      <SingleHeader>
        <ImageCardInfo copy={copy} headerInfo={headerInfo} id={router.query.id} 
        getAlbumId={getAlbumId} handleAddToBookMark={handleAddToBookMark} 
        handleDeleteFromBookMark={handleDeleteFromBookMark} toggleModal={toggleModal}/>
      </SingleHeader>
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
          <button type="submit">Submit</button>
        </form>
      </FilterBox>
      <ElementsInCategoryContainer>
        {/* todo:populate with filtered data */}
        {filtered?.map((data) => (
          <ScreenshotContainer key={data.id}>
            <AbsoluteBox className="target" onClick={(e) => downloadImage(e)}>
              <Title className="target" title="download to device">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>
              </Title>
            </AbsoluteBox>

            {/* Todo: break into components */}

            {getId.includes(data.id) ? (
              <DownloadWrapper
                className="target"
                onClick={() => deleteIndividualBookmark(user.uid, data)}
              >
                <Title className="target" title="delete from collection">
                <img src="/assets/img/heart-filled.png" alt="delete icon"/>
                </Title>
              </DownloadWrapper>
            ) : (
              <DownloadWrapper
                className="target"
                onClick={() => bookmark(data)}
              >
                <Title className="target" title="save to collection">
                  <img src="/assets/img/heart-empty.png" alt="like icon"/>
               </Title>
              </DownloadWrapper>
            )}
            <CopyWrapper>
            <Title className="target" title="copy to clipboard" onClick={(e) => copyImage(e)}>
            <img src="/assets/img/copy-icon.svg" alt="copy icon"/>
            </Title>
</CopyWrapper>
            <Image
              src={data.url}
              alt="imageSelected"
              width={1080}
              height={2240}
            />
          </ScreenshotContainer>
        ))}
      </ElementsInCategoryContainer>
    </>
  );
}

const ModalBox = styled.div`
background-color: #fff;
max-width: 37.5rem;
padding: 1.6rem;
border-radius: 0.5rem;
`
const FilterBox = styled.div``;
const DownloadWrapper = styled.div`
  position: absolute;
  block: "";
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 7px 16px;
  align-items: flex-start;
  top: 10px;
  right: 94px;
  border-radius: 2em;
  visibility: hidden;
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
  background: linear-gradient(to bottom,white 99%,black 1%);
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
const TitleBox = styled.div`
z-index:99;
border-radius:25px;
	 display:flex;
	 flex-direction:row;
	 gap:8px;
	 justify-content:space-between;
	 align-items:center
	background: rgba(25,25,25,.8);
    border-color: transparent;
	backdrop-filter: blur(65px);
	color:white;
	// padding:10px 12px;
}
img{
	height:15px !important;
	fill: #fff;
  }

`;
const Wrapper = styled.div`
  background: var(--primary-color);
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  z-index: 99;
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  padding: 5px;
  position: absolute;
  block: "";
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.17);
  z-index: 99;
  top: 0;
  right: 0;
  visibility: hidden;
  svg{
    width: 23px;
    height: 23px;
    vertical-align: middle;
  }
  img{
    height: 20px;
    width: 20px;
    transition: all .5s ease-out;
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
  display: grid;
  grid-template-columns: repeat(1,1fr);
  margin: 1.5em auto;
  gap: 10px;
  width: 90%;
  @media (min-width: 540px) {
    grid-template-columns: repeat(2,1fr);
  }
  @media (min-width: 768px) {
    width: 95%;
    margin: 3em auto;
    gap: 20px;
    grid-template-columns: repeat(4,1fr);
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
  const screen = await getScreensData();

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

  const screens = await queryScreenImage(id);
  return {
    props: { screens },
  };
};
