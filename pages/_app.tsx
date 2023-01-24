import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import '../styles/globals.css';
import Script from 'next/script';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import { UserContextProvider } from '../context/authContext';
import { ScreensContextProvider } from '../context/screensContex';
import Head from 'next/head';
import Header from '../components/Header';
import ScreenContextProvider from '../context/screenContext';
import { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: any) => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		router.events.on('hashChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
			router.events.off('hashChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	useEffect(() => {
		hotjar.initialize(3322744, 6, true);
	}, []);

	return (
		<UserContextProvider>
			<ScreensContextProvider>
				<Script
					strategy='lazyOnload'
					src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
				/>

				<Script id='google-analytics' strategy='lazyOnload'>
					{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
                  `}
				</Script>
				<Script id='segment' strategy='lazyOnload'>
					{`  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="CzMF6ZIUJcE8l8lgVpjsbJv1gT5jVvBo";;analytics.SNIPPET_VERSION="4.15.3";
    analytics.load("CzMF6ZIUJcE8l8lgVpjsbJv1gT5jVvBo");
    analytics.page();
    }}();`}
				</Script>

				<Head>
					<meta charSet='utf-8' />
					<title>Welcome to Uiland</title>
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
					<meta property='og:image' content='/assets/img/homepage-snap.png' />
					<meta property='og:url' content='cannot_get_url_for_ssr' />
					<meta property='og:type' content='website' />
					<meta property='og:site_name' content='Uiland' />
					<meta name='twitter:card' content='summary_large_image' />
					<meta
						name='twitter:title'
						content='Browse Mobile Apps designs | Uiland - The Africa’s largest mobile design reference library'
					/>
					<meta name='twitter:url' content='https://uiland.design' />
					<meta
						name='twitter:description'
						content='Discover hundreds of Mobile apps designs for UI &amp; UX research.'
					/>
					<meta name='twitter:image' content='/assets/img/homepage-snap.png' />
					<meta name='twitter:site' content='@UiLandDesign' />
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/apple-touch-icon.png?v=2.1'
					/>
					<link rel='icon' type='image/svg+xml' href='/favicon.svg?v=2.1' />
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						// href="/favicon-32x32.png?v=2.1"
						href=''
					/>
					<link rel='icon' type='image/png' sizes='16x16' href='' />
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

				<Header />
				<Component {...pageProps} />
			</ScreensContextProvider>
		</UserContextProvider>
	);
}

export default MyApp;
