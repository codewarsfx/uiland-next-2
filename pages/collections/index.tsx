import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { UserContext } from '../../context/authContext';
import { getAllSingleBookmarkNames } from '../../supabase';
import { mobileCheck } from '../../utils/isMobile';

export default function Collection() {
	const user = useContext(UserContext);
	const [bookmark, setBookmark] = useState([]);

	useEffect(() => {
		const isMobile = mobileCheck();

		const allBookmarkNames = async () => {
			const data = await getAllSingleBookmarkNames();
			setBookmark(data);
		};
		allBookmarkNames();
	}, []);
	return (
		<>
			<SingleHeader>
				<TitleBackground>
					<Title>Collections</Title>
				</TitleBackground>

				<Content>
					<Link href='/collections/album'>
						<AlbumTag>
							<ImageHolder>
								<Link href='/collections/album' passHref={true}>
									<a>Albums</a>
								</Link>
							</ImageHolder>
						</AlbumTag>
					</Link>

					{JSON.stringify(bookmark) !== JSON.stringify([]) ? (
						bookmark.map((name) => {
							return (
								<>
									<Link href={`/collections/individual/${name}`}>
										<IndividualTag>
											<ImagesHolder>
												<Link href={`/collections/individual/${name}`}>
													<p data-text={name}>{name}</p>
												</Link>
												{/* <img src="/assets/img/image-collection.jpg"/> */}
											</ImagesHolder>
										</IndividualTag>
									</Link>
								</>
							);
						})
					) : (
						<Link href='/'>
							<EmptyTag>
								<ImagesHolder>
									<Link href='/' passHref={true}>
										<a>Create a Collection</a>
									</Link>
								</ImagesHolder>
							</EmptyTag>
						</Link>
					)}
				</Content>
			</SingleHeader>
			<ElementsInCategoryContainer></ElementsInCategoryContainer>
		</>
	);
}

// function getRandomNumber(maxNum){
// 	return Math.floor(Math.random() * maxNum);
//   };
//  function getRandomColor  ()  {
// 	let h = getRandomNumber(360);
// 	return h;
//   };

//   let firstColor=getRandomColor();
//   let secondColor=getRandomColor();

const ImageHolder = styled.div`
	height: 290px;

	background: linear-gradient(
		calc(var(--angle) * 1deg),
		hsl(14deg 73% 62%),
		hsl(44deg 73% 62%)
	);
	display: flex;
	align-items: flex-end;
	justify-content: end;
	width: 100%;
	padding: 12px;
	// img{
	// 	width: 100%;
	//     object-fit: cover;

	// }
`;

const ImagesHolder = styled(ImageHolder)`
   width: 100%;
	background: linear-gradient(
		calc(var(--angle) * 1deg),
		hsl(14deg 73% 62%),
		hsl(344deg 73% 62%)
	);
`;
const AlbumTag = styled.div`
	width: 100%;
	border-radius: 10px;
	flex: 0 0 100%;
	overflow: hidden;
	display: flex;
	position: relative;
	flex-direction: column;
	cursor: pointer;
	:hover a {
		opacity: 1;
	}
	:hover a::before {
		-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	}
	
	a {
		font-size: 20px;
		font-weight: 600;
		color: black;
		z-index: 99999999;
		overflow: hidden;
		text-overflow: ellipsis;
		// padding-left:12px;
		transition: opacity 0.2s linear;
		position: relative;
		&::before {
			content: 'Albums';
			z-index: 2;
			height: 100%;
			width: 100%;
			font-family: inherit;
			font-size: inherit;
			font-weight: inherit;
			color: #fff;
			-webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
			clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
			transition: -webkit-clip-path 0.35s cubic-bezier(0.19, 1, 0.22, 1),
				-webkit-clip-path 0.35s cubic-bezier(0.19, 1, 0.22, 1),
				clip-path 0.35s cubic-bezier(0.19, 1, 0.22, 1);
			position: absolute;
			top: 0;
			left: 0;
		}
	}
	// &::before{
	// 	position:absolute;
	// 	display:block;
	// 	content:"";
	// 	width:100%;
	// 	height:100%;
	// 	z-index:99;
	// 	background-image: linear-gradient(to bottom,#1e1f2100,#0e0f0fcc);
	// }
`;
const EmptyTag = styled.div`
	max-width: 100%;
	border-radius: 10px;
	flex: 0 0 100%;
	overflow: hidden;
	display: flex;
	position: relative;
	flex-direction: column;
	cursor: pointer;
	:hover a {
		opacity: 1;
	}
	:hover a::before {
		-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	}
	@media (min-width: 540px) {
		max-width: 49%;
		flex: 0 0 49%;
	}
	@media (min-width: 768px) {
		max-width: 19%;
		flex: 0 0 19%;
	}
	a {
		font-size: 20px;
		font-weight: 600;
		color: black;
		z-index: 99999999;
		overflow: hidden;
		text-overflow: ellipsis;
		// padding-left:12px;
		transition: opacity 0.2s linear;
		position: relative;
		&::before {
			content: 'Create a Collection';
			z-index: 2;
			height: 100%;
			width: 100%;
			font-family: inherit;
			font-size: inherit;
			font-weight: inherit;
			color: #fff;
			-webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
			clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
			transition: -webkit-clip-path 0.35s cubic-bezier(0.19, 1, 0.22, 1),
				-webkit-clip-path 0.35s cubic-bezier(0.19, 1, 0.22, 1),
				clip-path 0.35s cubic-bezier(0.19, 1, 0.22, 1);
			position: absolute;
			top: 0;
			left: 0;
		}
	}
	// &::before{
	// 	position:absolute;
	// 	display:block;
	// 	content:"";
	// 	width:100%;
	// 	height:100%;
	// 	z-index:99;
	// 	background-image: linear-gradient(to bottom,#1e1f2100,#0e0f0fcc);
	// }
`;
const IndividualTag = styled.div`
	width: 100%;
	border-radius: 10px;
	flex: 0 0 100%;
	overflow: hidden;
	display: flex;
	position: relative;
	flex-direction: column;
	cursor: pointer;
	:hover p {
		opacity: 1;
	}
	:hover p::before {
		-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	}
	p {
		font-size: 20px;
		font-weight: 600;
		color: black;
		z-index: 99999999;
		overflow: hidden;
		text-overflow: ellipsis;
		// padding-left:12px;
		transition: opacity 0.2s linear;
		position: relative;
		&::before {
			content: attr(data-text);
			z-index: 2;
			height: 100%;
			width: 100%;
			font-family: inherit;
			font-size: inherit;
			font-weight: inherit;
			color: #fff;
			-webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
			clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
			transition: -webkit-clip-path 0.35s cubic-bezier(0.19, 1, 0.22, 1),
				-webkit-clip-path 0.35s cubic-bezier(0.19, 1, 0.22, 1),
				clip-path 0.35s cubic-bezier(0.19, 1, 0.22, 1);
			position: absolute;
			top: 0;
			left: 0;
		}
	}
	// &::before{
	// 	position:absolute;
	// 	display:block;
	// 	content:"";
	// 	width:100%;
	// 	height:100%;
	// 	z-index:99;
	// 	background-image: linear-gradient(to bottom,#1e1f2100,#0e0f0fcc);
	// }
`;
const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	margin: 1.5em auto;
	gap: 20px;
	width: 100%;
	flex-wrap: wrap;
`;
const TitleBackground = styled.div`
	align-items: flex-end;
	border-radius: 10px;
	padding: 12px;
	display: flex;
	width: 100%;
	background-image: linear-gradient(to bottom, #1e1f2100, #0e0f0f),
		url('/assets/img/collection-background.jpg');
	height: 60vh;
	overflow: hidden;
	background-repeat: no-repeat;
	background-size: cover;
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

const Title = styled.h1`
	z-index: 99;
	font-size: 36px;
	color: white;
	font-weight: 600;
	margin: 0;
	padding: 0;
`;
const SingleHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 15px;
	gap: 8px;
`;
