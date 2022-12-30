import '../styles/globals.css'
import { analytics } from '../firebase';
import { UserContextProvider } from "../context/authContext";
function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //   // if (process.env.NODE_ENV === 'production') {
  //   //   analytics();
  //   // }
  // }, [])


  return (
    <UserContextProvider><Component {...pageProps} /></UserContextProvider>
    
  ) 
}

export default MyApp
