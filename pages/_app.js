import '../styles/globals.css'
import { analytics } from '../firebase';
import { UserContextProvider } from "../context/authContext";
import { Analytics } from '@vercel/analytics/react';
function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //   // if (process.env.NODE_ENV === 'production') {
  //   //   analytics();
  //   // }
  // }, [])


  return (
    <UserContextProvider>
      <Component {...pageProps} />
      <Analytics />
      </UserContextProvider>
    
  ) 
}

export default MyApp
