/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['lh3.googleusercontent.com', 'epcjufipobybxdmcqjgb.supabase.co'],
	},
};

module.exports = nextConfig;
