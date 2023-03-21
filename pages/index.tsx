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
import Head from 'next/head';

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

	//   useEffect(()=>{
	// 	async function result(){
	// 	const data= await fetch('/api/cloudfare',{method:'GET',mode:'cors'})
	// 	const res= data.json()
	// 	console.log('res')
	// 	console.log(res)
	// 	}
	// 	result()

	//   },[])

	return (
		<>
			<Head>
				<title>Uiland</title>
				<meta
					name='title'
					property='og:title'
					content='Browse Mobile Apps designs | Uiland - The Africa’s largest mobile design reference library'
				/>
				<meta
					name='description'
					content='Browse Mobile Apps designs | Uiland - The Africa’s largest mobile design reference library'
				/>
				<link rel='icon' href='/favicon.ico' />
				{/* Open Graph / Facebook */}
				<meta property='og:type' content='website' />

				<meta property='og:url' content='https://uiland.design' />
				<meta property='og:title' content='uiland.design' />
				<meta
					name='description'
					property='og:description'
					content='Browse Mobile Apps designs | Uiland - The Africa’s largest mobile design reference library'
				/>
				<meta property='og:site_name' content='uiland.design' />
				<meta
					name='image'
					property='og:image'
					content='https://epcjufipobybxdmcqjgb.supabase.co/storage/v1/object/public/uiland-store/uiland-capture2.PNG'
				/>
				{/* Twitter */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://uiland.design' />
				<meta property='twitter:site' content='@uiland' />
				<meta property='twitter:title' content='uiland.design' />
				<meta
					property='twitter:description'
					content='Browse Mobile Apps designs | Uiland - The Africa’s largest mobile design reference library'
				/>
				<meta
					property='twitter:image'
					content='https://epcjufipobybxdmcqjgb.supabase.co/storage/v1/object/public/uiland-store/uiland-capture2.PNG'
				/>
				<meta name='next-head-count' content='23' />
				<meta
					name='google-site-verification'
					content='ODqtX_v3ldmmo5AB7fzcCJtP6IXdY_RDDeCK29OG6qs'
				/>
			</Head>

			{/* This removes the hero section if signedIn */}
			{!user && <Hero />}
			<Tab />
			<ScreensTab screens={result} />
			<Footer />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=10, stale-while-revalidate=59'
	);

	let screens;
	const client = new Redis(process.env.REDIS_URL); // new redis instance

	process.on('uncaughtException', function (err) {
		console.log(err);
	});

	let cache = await client.get('screens'); // fetch cahed screen from instance 
	cache = cache && JSON.parse(cache);

	if (cache) {  //if cache exists read from it else read data from supabase and cache the data retrieved to instance
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
