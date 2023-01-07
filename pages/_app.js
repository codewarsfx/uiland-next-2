import { useEffect } from "react";
import "../styles/globals.css";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { UserContextProvider } from "../context/authContext";
import { ScreensContextProvider } from "../context/screensContex";
import Head from "next/head";
import Header from "../components/Header";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <UserContextProvider>
      <ScreensContextProvider>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
                `}
        </Script>
        <Head>
          <meta charSet="utf-8" />
          <title>Welcome to Uiland</title>
          <meta
            name="description"
            content="Discover hundreds of Mobile apps designs for UI &amp; UX research."
          />
          <link rel="shortcut icon" href="/favicon.ico"></link>
          <meta
            property="og:title"
            content="Browse Mobile Apps designs | Uiland - The Africa’s largest mobile design reference library"
          />
          <meta
            property="og:description"
            content="Discover hundreds of Mobile apps designs for UI &amp; UX research."
          />
          <meta
            property="og:image"
            content="/assets/img/homepage-snap.png"
          />
          <meta property="og:url" content="cannot_get_url_for_ssr" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Uiland" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Browse Mobile Apps designs | Uiland - The Africa’s largest mobile design reference library"
          />
          <meta
            name="twitter:url"
            content="https://uiland.design"
          />
          <meta
            name="twitter:description"
            content="Discover hundreds of Mobile apps designs for UI &amp; UX research."
          />
          <meta
            name="twitter:image"
            content="/assets/img/homepage-snap.png"
          />
          <meta name="twitter:site" content="@UiLandDesign" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png?v=2.1"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2.1" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            // href="/favicon-32x32.png?v=2.1"
            href=""
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href=""
          />
          {/* <link rel="manifest" href="/site.webmanifest?v=2.1" /> */}
          <link
            rel="mask-icon"
            // href="/safari-pinned-tab.svg?v=2.1"
            href=""
            color="#000000"
          />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta name="next-head-count" content="23" />
          <meta name="google-site-verification" content="ODqtX_v3ldmmo5AB7fzcCJtP6IXdY_RDDeCK29OG6qs" />
        </Head>
        
        <Header />
        <Component {...pageProps} />
      </ScreensContextProvider>
    </UserContextProvider>
  );
}

export default MyApp;
