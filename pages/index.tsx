import Hero from '../components/Hero';
import { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tab from '../components/TabSection';
import ScreensTab from '../components/ScreensTab';
import { getAllScreens, supabase } from '../supabase';
import { ScreensContext } from '../context/screensContex';
import { UserContext } from '../context/authContext';
import { GetServerSideProps } from 'next';
import LikeIcon from '../components/LikeIcon';

const Home = ({ screens }) => {
	const { filterTerm, filterName } = useContext(ScreensContext);
	const user = useContext(UserContext);
	const [result, setResult] = useState([]);

	const searchFilter = (array, data) => {
		if (data === '') return array;
		return array.filter((el) => el.category === data);
	};

	const searchNameFilter = (array, data) => {
		if (data === '') return array;
		return array.filter((el) => el.name === data);
	};

	useEffect(() => {
		setResult(searchNameFilter(screens, filterName));
	}, [filterName, screens]);

	useEffect(() => {
		setResult(searchFilter(screens, filterTerm));
	}, [filterTerm, screens]);

	//saves first user in mailchimp database
	useEffect(() => {
		supabase.auth.onAuthStateChange((event, session) => {
			async function getEmail() {
				if (event == 'SIGNED_IN') {
					const download = await fetch('/api/mailchimp', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(session.user),
					});
					const data = await download.json();
				}
			}
			getEmail();
		});
	}, []);

	return (
		<>
			 <ToastContainer autoClose={2000} position='top-center' />
			{!user && <Hero />}
			<Tab />
			<ScreensTab screens={result} /> 
			
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const screens = await getAllScreens();

	return {
		props: {
			screens,
		},
	};
};

export default Home;
