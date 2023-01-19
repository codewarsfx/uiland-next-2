import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../context/authContext';
import { getBookmarks } from '../../supabase';
import BookmarkScreensInCategory from '../../components/BookmarkScreensInCategory';

export default function AlbumCollections() {
	const user = useContext(UserContext);
	const [screens, setScreens] = useState([]);
	useEffect(() => {
		async function getAlbums() {
			if (user) {
				const data = await getBookmarks(user);

				setScreens(data);
			}
		}
		getAlbums();
	}, [user]);

	return (
		<>
			<SingleHeader>
				<>
					<Title>Albums</Title>

					<div></div>
				</>
			</SingleHeader>

			<BookmarkScreensInCategory screens={screens} />
		</>
	);
}

const Title = styled.h1`
	z-index: 99;
	font-size: 12px;
	font-weight: 300;
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
