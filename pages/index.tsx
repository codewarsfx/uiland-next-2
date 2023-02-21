import { GetServerSideProps } from 'next';
import { useContext, useEffect, useState } from 'react';

//components
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ScreensTab from '../components/ScreensTab';

//supabase
import { getAllScreens } from '../supabase';

//context
import { ScreensContext } from '../context/screensContex';
import { UserContext } from '../context/authContext';
import Header from '../components/Header';
import Modal from '../components/modal';
import Redis from 'ioredis';
import Tab from '../components/TabSection';

const Home = ({ screens }) => {
	const { filterTerm, filterName } = useContext(ScreensContext);
	const user = useContext(UserContext);
	const [result, setResult] = useState([]);

	/**
	 *
	 * @param screensResult
	 * @param tabInput
	 * @returns array of screens
	 */
	//High order component that returns the array of screens to the result state
	const categoryFilter = (screensResult, tabInput) => {
		//if empty, returns the initial array of screens
		if (tabInput === '') return screensResult;
		return screensResult.filter((el) => el.category.includes(tabInput));
	};

	/**
	 *
	 * @param screensResult
	 * @param searchInput
	 * @returns array of screens
	 */
	//High order component that returns the array of screens to the result state
	const nameFilter = (screensResult, searchInput) => {
		//if empty, returns the initial array of screens
		if (searchInput === '') return screensResult;
		return screensResult.filter((el) => el.name.includes(searchInput));
	};

	//This triggers the state on every search input
	useEffect(() => {
		setResult(nameFilter(screens, filterName));
	}, [filterName, screens]);

	//This triggers the state on every tab change
	useEffect(() => {
		setResult(categoryFilter(screens, filterTerm));
	}, [filterTerm, screens]);

	return (
		<>
			{/* This removes the hero section if signedIn */}
			{!user && <Hero />}
			<Tab />
			<ScreensTab screens={result} />
			<Footer />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	let screens;
	const client = new Redis(process.env.REDIS_URL);

	process.on('uncaughtException', function (err) {
		console.log(err);
	});

	let cache = await client.get('screens');
	cache = cache && JSON.parse(cache);

	if (cache) {
		screens = cache;
		console.log('read from redis cache ');
	} else {
		screens = await getAllScreens();
		client.set('screens', JSON.stringify(screens), 'EX', 3600);
		console.log('read from supabase');
	}

	return {
		props: {
			screens,
		},
	};
};

export default Home;
