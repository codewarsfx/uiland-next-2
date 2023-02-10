import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Screenshot = ({ imgLink, Name, blurPlaceholder = '' }) => {
	return (
		<>
			<ScreenshotContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<Image
					width={320}
					height={640}
					src={imgLink}
					alt={Name}
					placeholder={blurPlaceholder == '' ? 'empty' : 'blur'}
					blurDataURL={blurPlaceholder}
				/>
			</ScreenshotContainer>
		</>
	);
};

const ScreenshotContainer = styled(motion.div)`
	border-radius: 0.8em;
	cursor: pointer;
	border: 1px solid #dddddd;
	overflow: hidden;

	max-height: 634px;
	img {
		height: 100%;
		width: 100%;
		display: block;
		border-radius: 0.8em;
	}

	@media (min-width: 768px) {
		border-radius: 2em;
		height: auto;
		img {
			border-radius: 2em;
		}
	}
`;

export default Screenshot;
