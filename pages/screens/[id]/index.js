import styled from "styled-components";
import { getScreensData } from "../../../firebase";
import { Screenshot } from "../../../components/uiElements/screenshot";
import { getindividualScreenData } from "../../../firebase";

export default function SinglePage({ screens }) {
  console.log(screens)
	return (
		<ElementsInCategoryContainer>
		{screens?.screens.map((cde) => {
				return <Screenshot key={cde.url} imgLink={cde.url} />;
			})}
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

async function getStaticPaths() {
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
  const screens = await getScreensData();
  console.log(screens)

	// Get the paths we want to prerender based on posts
	// In production environments, prerender all pages
	// (slower builds, but faster initial page load)
	const paths = screens.map((post) => ({
		params: { id: post.id },
	}));

	// { fallback: false } means other routes should 404
	return { paths, fallback: false };
}

const getStaticProps = async (context) => {
  const id = context.params.id;
  console.log(id)
  const data = await getindividualScreenData(id);
  console.log(data)

	return {
		props: { screens: data },
	};
};
