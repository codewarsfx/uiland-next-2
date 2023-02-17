import { GetServerSideProps } from 'next';

import { useContext, useEffect, useState } from 'react';

//components
import Tab from '../components/TabSection';
import ScreensTab from '../components/ScreensTab';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

//supabase
import { getAllScreens } from '../supabase';

//context
import { ScreensContext } from '../context/screensContex';
import { UserContext } from '../context/authContext';

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
	const screens = await getAllScreens();

	return {
		props: {
			screens,
		},
	};
};

export default Home;
