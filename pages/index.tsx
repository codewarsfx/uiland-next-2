import Hero from '../components/Hero';
import { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tab from '../components/TabSection';
import ScreensTab from '../components/ScreensTab';
import { getAllScreens } from '../supabase';
import { ScreensContext } from '../context/screensContex';
import { UserContext } from '../context/authContext';
import { GetServerSideProps } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/modal';
import NewsLetter from '../components/NewsLetter';
import { PopContext } from '../context/PopContext';
import { getPlaiceholder } from "plaiceholder";

const Home = ({ screens }) => {
	const { filterTerm, filterName } = useContext(ScreensContext);
	const user = useContext(UserContext);
	const [result, setResult] = useState([]);
	const { openNewsLetter, setOpenNewsLetter } = useContext(PopContext);

	const searchFilter = (array, data) => {
		if (data === '') return array;
		return array.filter((el) => el.category.includes(data));
	};

	const searchNameFilter = (array, data) => {
		if (data === '') return array;
		return array.filter((el) => el.name.includes(data));
	};

	useEffect(() => {
		setResult(searchNameFilter(screens, filterName));
	}, [filterName, screens]);

	useEffect(() => {
		setResult(searchFilter(screens, filterTerm));
	}, [filterTerm, screens]);

	return (
		<>
			<ToastContainer autoClose={2000} position='top-center' />
			{!user && <Hero />}
			<Tab />
			<ScreensTab screens={result} />
			<Footer />
			{openNewsLetter && (
				<Modal toggleModal={() => setOpenNewsLetter(!openNewsLetter)}>
					<NewsLetter toggleModal={() => setOpenNewsLetter(!openNewsLetter)} />
				</Modal>
			)}
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const screens = await getAllScreens();

	const screensWithBlurPlaceholder = await Promise.all(screens.map(async screen => {
		const startScreens = await Promise.all(screen.startScreens.map(async (imageUrl) => {
			const { base64, img } = await getPlaiceholder(
				imageUrl,
				{ size: 10 }
			);
			return {
				img,
				base64
			}
		})).then((value) => value);
		return {
			...screen,
			startScreens
		}
	
	})).then((value) => value);

	
    


	return {
		props: {
			screens:screensWithBlurPlaceholder,
		},
	};
};

export default Home;
