import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { UserContext } from '../../../context/authContext';
import { viewSingleBookmark } from '../../../supabase';
import EmptyState from '../../../components/EmptyState';
import Screenshots from '../../../components/Screenshots';

export default function IndividualCollections() {
	const router = useRouter();
	const [screens, setScreens] = useState([]);
	const user = useContext(UserContext);

	useEffect(() => {
		async function getAlbums() {
			if (user) {
				const data = await viewSingleBookmark(router.query.name);

				setScreens(data);
			}
		}
		getAlbums();
	}, [router.query.name, user]);

	return (
		<>
			<SingleHeader>
				<>
					<Title>{router.query.name}</Title>
					<div></div>
				</>
			</SingleHeader>
			<ElementsInCategoryContainer>
				{screens.length > 0 ? (
					<Screenshots screens={screens} />
				) : (
					<EmptyState />
				)}
			</ElementsInCategoryContainer>
		</>
	);
}

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
	z-index: 99;
	font-size: 12px;
	font-weight: 300;
	margin: 0;
	padding: 5px;
	position: absolute;
	content: '';
	border-radius: 5px;
	background: rgba(0, 0, 0, 0.17);
	z-index: 99;
	top: 0;
	right: 0;
	visibility: hidden;
	svg {
		width: 23px;
		height: 23px;
		vertical-align: middle;
	}
	img {
		height: 20px;
		width: 20px;
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
	gap: 32px;
	width: 90%;
	@media (min-width: 540px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 768px) {
		width: 95%;
		margin: 3em auto;
		gap: 32px;
		grid-template-columns: repeat(4, 1fr);
	}
`;

const SecondRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background: rgb(0 0 0 / 17%);
	border-radius: 28px;
`;
