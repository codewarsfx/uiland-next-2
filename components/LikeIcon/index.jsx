import { useEffect, useState } from 'react';
import styled from 'styled-components';

const LikeIcon = ({ hasSumbitted,ids, data, deleteIndividualBookmark, bookmark }) => {
	const [isLiked, setIsLiked] = useState(false);

	useEffect(() => {
		if (has === true && ids.includes(data.id)) {
			setIsLiked(true);
		}

},[hasSumbitted])

	useEffect(() => {
		if (ids.includes(data.id)) {
			setIsLiked(true);
		}
	}, []);

	const Like = async (data) => {
		 bookmark(data)
	};

	const unLike = (data) => {
		deleteIndividualBookmark(data);
		setIsLiked(false);
	};

	const handleIconClick = () => {
		if (isLiked) {
			unLike(data);
			return;
		}
		Like(data);
	};

	return <Icon onClick={handleIconClick} isLiked={isLiked} />;
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
