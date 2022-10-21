import Hero from "../components/Hero";
import Tab from "../components/TabSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Home = () => {
	return (
		<>
			<ToastContainer autoClose={2000} position='top-center' />
			<Hero />
			<Tab />
		</>
	);
};

export default Home;
