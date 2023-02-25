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

	return (
		<>
			<Head>
				<link rel='shortcut icon' href='/favicon.ico' />
				<meta charSet='utf-8' />
				<title>Uiland</title>
				<meta
					name='description'
					content='Discover hundreds of Mobile apps designs for UI &amp; UX research.'
				/>
				{/* <meta name="description" content="Screenshots, interaction patterns, inspiration &amp; UI patterns from Airbnb."> */}
				<link rel='shortcut icon' href='/favicon.ico'></link>
				<meta
					property='og:title'
					content='Browse Mobile Apps designs | Uiland - The Africa’s largest mobile design reference library'
				/>
				<meta
					name='keywords'
					content='africa,nigeria,ui, design, inspiration, ux, mobile, apps, screenshots'
				/>
				<meta
					property='og:description'
					content='Discover hundreds of Mobile apps designs for UI &amp; UX research.'
				/>
				<meta
					name='image'
					property='og:image'
					content='https://epcjufipobybxdmcqjgb.supabase.co/storage/v1/object/public/uiland-store/uiland-capture2.PNG'
				/>
				<meta
					property='og:image:secure_url'
					content='https://epcjufipobybxdmcqjgb.supabase.co/storage/v1/object/public/uiland-store/uiland-capture2.PNG'
				/>
				<meta
					property='og:image:alt'
					content='Browse Mobile Apps designs | Uiland'
				/>
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='630' />
				<meta property='og:image:type' content='image/png' />
				<meta property='og:url' content='' />
				<meta property='og:type' content='website' />
				<meta property='og:site_name' content='Uiland' />
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='@UiLandDesign' />{' '}
				<meta property='twitter:site' content='@UiLandDesign' />{' '}
				<meta property='twitter:title' content='uiland.design' />
				<meta
					property='twitter:description'
					content='Discover hundreds of Mobile apps designs for UI &amp; UX research.'
				/>
				<meta
					property='twitter:image:src'
					content='https://epcjufipobybxdmcqjgb.supabase.co/storage/v1/object/public/uiland-store/uiland-capture2.PNG'
				/>
				<link rel='icon' href='/favicon.ico' />
				{/* <link rel="manifest" href="/site.webmanifest?v=2.1" /> */}
				<link
					rel='mask-icon'
					// href="/safari-pinned-tab.svg?v=2.1"
					href=''
					color='#000000'
				/>
				<meta name='msapplication-TileColor' content='#000000' />
				<meta name='theme-color' content='#ffffff' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1'
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
	)
	
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
