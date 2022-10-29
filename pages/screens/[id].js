import Image from "next/image"
import styled from "styled-components";
import { getindividualScreenData,getScreensData  } from "../../firebase";
import {BrandLogoBig} from '../../components/uiElements';
import Header from '../../components/Header';
export default function SinglePage({ screens }) {
	return (
		<>
		   <Wrapper>
    <Header />
    </Wrapper>
    <SingleHeader>
     <BrandLogoBig imageUrl={screens.logo}/>
     <Title>{screens.Name}</Title>
     <WebLink href={screens.websiteLink}>{screens.websiteLink}</WebLink>
    
	  </SingleHeader>
		<ElementsInCategoryContainer>
		{screens?.screens?.map((vf) => (
			<ScreenshotContainer key={vf.url}>
		<AbsoluteBox className="target"> <TitleBox><Image src='/assets/img/save.svg' width={30} height={30} alt='save' /><Title>Save</Title></TitleBox> <Title>hhh</Title></AbsoluteBox>
       <Image src={vf.url} alt="lk" width={720} height={1440}/>
			</ScreenshotContainer>
			
			))}
		
			
		</ElementsInCategoryContainer>
</>
	);
}
const AbsoluteBox = styled.div`
	position:absolute;
  height:100%;
  width:100%;
  block:"";
  z-index: 99;
  display:flex;
  flex-direction:row;
  padding: 7px 16px;
  justify-content:space-between;
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
const Wrapper = styled.div`
	background:var(--primary-color)
`;
const ImageWrapper = styled.div`
	position:relative;
  overflow:hidden;
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

const Title = styled.h1`
	z-index:99;
	font-size:12px;
	font-weight:300;
	margin:0;
	padding:0;
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
	grid-template-columns: repeat(auto-fit, minmax(239px, 1fr));
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
