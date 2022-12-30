
import React, { useContext,useEffect,useState } from "react";
import { useRouter } from 'next/router'
import Image from "next/image"
import styled from "styled-components";

import { getindividualScreenData,addBookMark,getScreensData,deleteBookMark,
	queryBookMarkIndividual,bookmarkSelected,deleteBookmarkSelected,queryBookMarkAlbum } from "../../firebase";

import { BrandLogobig } from "../../components/uiElements";
import Header from '../../components/Header';

import { UserContext } from "../../context/authContext";
export default function SinglePage({ screens }) {

const [displayBasic, setDisplayBasic] = useState(false);
const[imageContent,setImageContent] = useState({})
const[getId,setGetId]= useState([])
const[getAlbumId,setGetAlbumId]= useState([])

const[input,setInput] = useState('BookmarkImage')
const user = useContext(UserContext);

const dialogFuncMap = {
	'displayBasic': setDisplayBasic
}
const router = useRouter()

//copies the url
const copy = async () => {
    await navigator.clipboard.writeText(
      `http://localhost:3000/screens/${router.query.id}`
    );

  };

  //finds the ids of individual screens that have been bookmarked and stores in an array
  //I used it to indicate on the frontend what image have been saved
useEffect(()=>{
	async function getIndividualScreens(){
		if(user){
			const data= await queryBookMarkIndividual(user.uid) 
	  data.forEach((item)=>{
		setGetId(prev=>{
			return [...prev,item.id]
		}) 
	  }) 
	}
	}
	getIndividualScreens()
},[user])


  //finds the ids of albums of images that have been bookmarked and stores in an array
  //I used it to indicate on the frontend what image have been saved
useEffect(()=>{
	async function getAlbums(){
		if(user){
			const data= await queryBookMarkAlbum(user.uid) 
	  data.forEach((item)=>{
		setGetAlbumId(prev=>{
			return [...prev,item.id]
		}) 
	  }) 
	}
	}
	getAlbums()
},[user])

//used to hide hide the modal when clicked
const onHide = (name) => {
	dialogFuncMap[`${name}`](false);
}

//tracks changes in the input field
function handleChange(e){
setInput(e.target.value)
}

//shows the modal and populates the imageContent state
async function bookmark(data){
	setDisplayBasic(true);
	setImageContent(data)
}

//function to delete individual screens
async function deleteIndividualBookmark(data){
	await deleteBookmarkSelected(user,  data)
}

//function to bookmark individual screen
function submit(e){
	//prevents default refresh
	e.preventDefault()
	console.log(user,imageContent,input)
	 bookmarkSelected(user,imageContent,input)
}

//function to download the individual images 
const  downloadImage =  async(e)=>{
// 	const download =await fetch("/api/hello",
// 	{method:"POST",headers:{
// 		"Content-Type":"application/json"
// 	},body:JSON.stringify(e)}
// 	);


// 	const download = await fetch("/api/hello");
// 		const data = await download.json();
//  console.log(data)
console.log(e.target.parentElement.parentElement.children[3].children[1].currentSrc)

//fetches the image
const image = await fetch(e.target.parentElement.parentElement.children[3].children[1].currentSrc)
console.log(image)

//converts it to a blob
const imageBlog = await image.blob()
console.log(imageBlog)
const imageURL = URL.createObjectURL(imageBlog)
console.log(imageURL)

//creates the a tag for download to happen <a download="image file name here" href="url"></a>
const link = document.createElement('a')
link.href = imageURL
link.download = 'image file name here'
document.body.appendChild(link)
link.click()
document.body.removeChild(link)
}

async function copyImage(e){

	//contains a url in this format 
	// "http://localhost:3000/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fuiland.appspot.com%2Fo%2FCowrywise%252FCowrywise-screens%252FScreenshot_2022-10-13-14-46-21-882_com.cowrywise.android-min.jpg%3Falt%3Dmedia%26token%3D3efdba80-8ec5-463a-9466-317f9247a6c3&w=1080&q=75"
	//which contains the prefetched images
	// This prevents cors error while getting the images	
	
	const response =  await fetch(e.target.parentElement.children[3].children[1].currentSrc);
		const blob = await response.blob();
		 navigator.clipboard.write([
		 
		  new window.ClipboardItem({
			[blob.type]: blob
		  })
		]);
		console.log('Image copied.');
}

//adds image album to bookmark
function handleAddToBookMark(){
	addBookMark(user.uid,id,screens)
   }
 
   //deletes image album to bookmark
   function handleDeleteFromBookMark(){
	 deleteBookMark(user.uid,id)
   }
	return (
		<>
		
		   <Wrapper>
    <Header />
    </Wrapper>
{displayBasic &&
		  <div  style={{ width: '50vw' }}  onHide={() => onHide('displayBasic')}>
                   <div>
					<form onSubmit={submit}>
					<label for="items">Choose a Bookmark:</label>
<select id="items" name="items" onChange={handleChange}>
  
  <option value="BookmarkImage">Bookmark Image</option>
</select>
                    {/* <input type="text" name="contentForm" value={input} onChange={handleChange}/> */}
					<button type="submit">Submit</button>
					</form>
				   </div>
                </div>}
    <SingleHeader>
		
     <BrandLogobig imageUrl={screens.logo}/>
     <Title>{screens.Name}</Title>
     <WebLink href={screens.websiteLink}>{screens.websiteLink}</WebLink>
     {getAlbumId.includes(router.query.id) ?(
                  <button
                    className=""
                    onClick={handleDeleteFromBookMark}
                  >
                    <img
                      src="/assets/img/bookmark-transparent.png"
                      alt="bookmark icon"
                      className="bookmark"
                    />
                  </button>
                ) : (
                  <button
                    className=""
                    onClick={handleAddToBookMark}
                  >
                    <img
                      src="/assets/img/bookmark-dark.svg"
                      alt="bookmark icon"
                      className="bookmark"
                    />
                    
                  </button>
                )}
                      <div className="album-card__buttoncopy" onClick={copy}>
                  <div className="album-card__copyicon"></div>
                  <div>Copy Link</div>
                </div>
                <div className="album-card__divc">
                  <h2 className="album-card__span">or share via</h2>
                  <div style={{display: "inline-flex"}}>
                    <a
                      className="album-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://twitter.com/intent/tweet?text=gg/single/${router.query.id}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#03A9F4"
                          d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <span>
                    {" "}
                    <a
                      className="album-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=http://localhost:3000/single/${router.query.id}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#0078d4"
                          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                        ></path>
                        <path
                          d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                          opacity=".05"
                        ></path>
                        <path
                          d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                          opacity=".07"
                        ></path>
                        <path
                          fill="#fff"
                          d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                        ></path>
                      </svg>
                    </a>
                    <a href={`https://wa.me/?text=http://localhost:3000/single/${router.query.id}`}
               target="_blank" rel="noreferrer">
              <img src="/assets/img/whatsapp.svg" alt="Share on WhatsApp"/>
            </a>

            <a href={`https://telegram.me/share/url?url=http://localhost:3000/single/${router.query.id}`}
               target="_blank" rel="noreferrer">
              <img src="/assets/img/telegram.svg" alt="Share on Telegram"/>
            </a>
            <a
href={`https://www.facebook.com/sharer/sharer.php?quote=http://localhost:3000/single/${router.query.id}`}
               target="_blank" rel="noreferrer">
              <img src="/assets/img/facebook.svg" alt="Share on Facebook"/>
            </a>
                  </span>
                </div>
	  </SingleHeader>
		<ElementsInCategoryContainer>
		{screens?.screens?.map((data) => (
			<ScreenshotContainer key={data.url}>
	
		<AbsoluteBox className="target"  onClick={(e)=>downloadImage(e)}>
			<Image src='/assets/img/save.svg' width={30} height={30} alt='download' /><Title className="target" >Download</Title></AbsoluteBox>
			
			{/* Todo: break into components */}
			{getId.includes(data.id)?
			<DownloadWrapper className="target"  onClick={()=>bookmark(data)}>
			<Image src='/assets/img/save.svg' width={30} height={30} alt='delete' /><Title className="target" >Delete</Title>
			</DownloadWrapper>:
			<DownloadWrapper className="target"  onClick={()=>deleteIndividualBookmark(data)}>
			<Image src='/assets/img/save.svg' width={30} height={30} alt='save' /><Title className="target" >Save</Title>
			</DownloadWrapper>
		}
			 <Title className="target" onClick={(e)=>copyImage(e)}>Copy Image</Title>
			 
       <Image src={data.url} alt="imageSelected" width={1080} height={2240} />
			</ScreenshotContainer>
			
			))}
		
			
		</ElementsInCategoryContainer>
</>
	);
}

const DownloadWrapper = styled.div`
position:absolute;
  block:"";
  z-index: 99;
  display:flex;
  flex-direction:column;
  padding: 7px 16px;
  align-items: flex-start;
  top:0;
  left:50%;
  right:50%;
  border-radius:2em;
  background:rgba(0, 0, 0, 0.17);
  visibility:hidden;

`
const AbsoluteBox = styled.div`
	position:absolute;
  block:"";
  z-index: 99;
  display:flex;
  flex-direction:column;
  padding: 7px 16px;
  align-items: flex-start;
  top:0;
  left:0;
  border-radius:2em;
  background:rgba(0, 0, 0, 0.17);
  visibility:hidden;
`;
const ScreenshotContainer= styled.div`
border-radius: 0.8em;
background-color: var(--light-grey-color);
    position:relative;
	cursor:pointer;
	&:hover .target {
		visibility:visible;
	   }
`
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
	background:var(--primary-color)
`;

const ImageWrapper = styled.div`
	position:relative;
  overflow:hidden;
`;


const Title = styled.h1`
	z-index:99;
	font-size:12px;
	font-weight:300;
	margin:0;
	padding:0;
	position:absolute;
	block:"";
	z-index: 99;
	top:0;
	right:0;
	visibility:hidden;
`;
const SingleHeader = styled.div`
	display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:15px;
  gap:8px;

`;

const WebLink = styled.a`
	font-weight:200;
  font-size:1.3rem;
  text-decoration:none;
  color:var(--primary-color);

`;
const ElementsInCategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(281px, 1fr));
	margin: 1.5em auto;
	gap: 10px;
	width: 90%;

	@media (min-width: 768px) {
		width: 95%;
		margin: 3em auto;
		gap: 20px;
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
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const screens = await getindividualScreenData(id);

	return {
		props: { screens },
	};
};
