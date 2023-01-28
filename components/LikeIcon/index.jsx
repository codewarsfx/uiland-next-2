import { useEffect, useState } from 'react';
import styled from 'styled-components';

const LikeIcon = ({ids,data,deleteIndividualBookmark,bookmark }) => {
	const [isLiked, setIsLiked] = useState(false);

	useEffect(() => {
		if (ids.includes(data.id)) {
			setIsLiked(true)
		}
	},[])

	const Like = (data) => {
		bookmark(data)
		setIsLiked(!isLiked)
	}

	const unLike = (data) => {
		deleteIndividualBookmark(data)
		setIsLiked(!isLiked)
	}

	const handleIconClick = () => {
		if (isLiked) {
		unLike(data)
			return;
		}
		Like(data)
  }

	return (
		<Icon
		onClick={handleIconClick} 
			isLiked={isLiked}
		/>
	);
};

const Icon = styled.div`
	width: 100px;
	height: 100px;
	background: url('/assets/img/heart.png');
	background-position: left;

	animation: ${({ isLiked }) => isLiked && `anim 0.7s steps(28) forwards`};
	transform: scale(0.8);
	@keyframes anim {
		to {
			background-position: right;
		}
	}
`;

export default LikeIcon;
