// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */

const runtimeCaching = require('next-pwa/cache');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	runtimeCaching,
});

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			'firebasestorage.googleapis.com',
			'lh3.googleusercontent.com',
			'epcjufipobybxdmcqjgb.supabase.co',
			'pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev'
		],
	},
};

module.exports = withBundleAnalyzer(withPWA(nextConfig));

module.exports = withSentryConfig(
	module.exports,
	{ silent: true },
	{ hideSourcemaps: true }
);
