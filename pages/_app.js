import '../styles/globals.css'
import { analytics } from '../firebase';
import { UserContextProvider } from "../context/authContext";
import { ScreensContextProvider } from "../context/screensContex";
import { Analytics } from '@vercel/analytics/react';
function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //   // if (process.env.NODE_ENV === 'production') {
  //   //   analytics();
  //   // }
  // }, [])


  return (
    <UserContextProvider>
      <ScreensContextProvider>
      <Component {...pageProps} />
      <Analytics />
      </ScreensContextProvider>
      </UserContextProvider>
    
  ) 
}

export default MyApp
