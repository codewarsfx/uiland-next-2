import { GetServerSideProps } from 'next';
import { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ScreensTab from '../components/ScreensTab';
import Tab from '../components/TabSection';
import { UserContext } from '../context/authContext';
import { ScreensContext } from '../context/screensContex';
import { getAllScreens } from '../supabase';
import Redis from 'ioredis';

const Home = ({ screens }) => {
	const { filterTerm, filterName } = useContext(ScreensContext);
	const user = useContext(UserContext);
	const [result, setResult] = useState([]);

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
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const client = new Redis(
		process.env.UPSTASH_REDIS_REST_URL
	);
	let screens;

	process.on('uncaughtException', function (err) {
		console.log(err);
	});

	let cache = await client.get('screens');
	cache = cache && JSON.parse(cache);

	if (cache) {
		screens = cache;
		console.log('read from redis cache ')
	} else {
		screens = await getAllScreens();
		client.set('screens', JSON.stringify(screens), 'EX', 3600);
		console.log('read from supabase')
	}

	return {
		props: {
			screens,
		},
	};
};

export default Home;
