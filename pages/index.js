import Hero from "../components/Hero";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tab from "../components/TabSection";
import ScreensTab from "../components/ScreensTab";
import { getScreensData } from "../firebase";
import { ScreensContext } from "../context/screensContex";

const Home = ({ screens }) => {
	const {filterTerm} = useContext(ScreensContext);

	const searchFilter=(array,data)=>{
		console.log(array,data)
		if(data === "") return array
		return array.filter((el)=> el.Category.toUpperCase() === data)
	  }
	  
	  const filtered= searchFilter(screens,filterTerm)

	return (
		<>
			<ToastContainer autoClose={2000} position='top-center' />
			<Hero />
			<Tab />
			<ScreensTab screens={filtered} />
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
