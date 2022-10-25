import Hero from "../components/Hero";

import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tab from "../components/TabSection";
import ScreensTab from "../components/ScreensTab";
import ElementsTab from "../components/ElementsTab";
import { useRouter } from "next/router";
import { getScreensData } from "../firebase";


const Home = ({ screens }) => {
	
	



	return (
		<>
			<ToastContainer autoClose={2000} position='top-center' />
			<Hero />
			<Tab />
			<ScreensTab screens={screens} />
		</>
	);
};



export async function getServerSideProps(context) {
	
	const screens = await getScreensData();

	return {
		props: {
			screens
		}
	}

}

export default Home;
