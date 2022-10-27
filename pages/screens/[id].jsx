import Image from "next/image"
import styled from "styled-components";
import { Screenshot } from "../../components/uiElements/screenshot";
import { getindividualScreenData,getScreensData  } from "../../firebase";

export default function SinglePage({ screens }) {
  console.log(screens)
  console.log(typeof screens.startScreens[0])
	return (
		<ElementsInCategoryContainer>
		{/* {screens.startScreens.map((url) => {
				return <Screenshot key={url} imgLink={url} />;
			})} */}
			
			{/* <Screenshot  imgLink={screens?.startScreens[0]} />;
				{screens.startScreens.map((url) => {
				return (
					<div key={parseInt(url,10)}>
						<h1>{parseInt(url,10)}</h1>
					</div>
				);
			})} */}
			{/* <Screenshot  imgLink={screens.screens[0].url} />; */}
			{screens.websiteLink}
			{screens.Name}<h1>{screens.startScreens[0]}</h1><h1>{screens.screens[1].url}</h1>
			<Image src={screens.screens[1].url} alt="hj" width="720" height="1440"/>
			<img src={screens.logo} alt="frtgf"/>
			
		</ElementsInCategoryContainer>

	);
}

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
  console.log(screen)

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
  console.log(id)
  const data = await getindividualScreenData(id);
  console.log(data)

	return {
		props: { screens: data },
	};
};
