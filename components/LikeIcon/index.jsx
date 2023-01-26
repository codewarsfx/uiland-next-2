import { useEffect, useState } from 'react';
import styled from 'styled-components';

const LikeIcon = ({ bookmark, data, deleteIndividualBookmark}) => {
	const [isLiked, setIsLiked] = useState(false);

	useEffect(() => {
		if (isLiked) {
			bookmark(data);
			return
		}
		else {
			deleteIndividualBookmark(data)
			return
		}
	}, [isLiked]);

	useEffect(() => {
		if (start) {
			setIsLiked(true)
		} else {
			setIsLiked(false)
		}
	},[])
	return <Icon onClick={ () => {
		setIsLiked(!isLiked)
	}
} isLiked={isLiked} />;
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
