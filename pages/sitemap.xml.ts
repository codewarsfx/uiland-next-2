import React from 'react';
import fs from 'fs';
import { getAllScreens } from '../supabase';
import { GetServerSideProps } from 'next';
const Sitemap = () => {};
export const getServerSideProps: GetServerSideProps = async ({ res }) => {

	const baseUrl = {
		development: 'http://localhost:3000',
		production: 'https://uiland.design',
	}[process.env.NODE_ENV];

	const mainPage = ['https://uiland.design'];
	const staticPages = fs
		.readdirSync(
			{
				development: 'pages',
				production: './.next/server/pages',
			}[process.env.NODE_ENV]
		)
		.filter((staticPage) => {
			return ![
				'_app.js',
				'_document.js',
				'profile.js',
				'404.html',
				'_error.js',
				'index.js',
				'sitemap.xml.js',
			].includes(staticPage);
		})
		.map((staticPagePath) => {
			return `${baseUrl}/${staticPagePath}`;
		});

	const documents = await getAllScreens();

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${mainPage
		.map((url) => {
			return `
	<url>
	  <loc>${url}</loc>
	  <lastmod>${new Date().toISOString()}</lastmod>
	  <changefreq>weekly</changefreq>
	  <priority>1.0</priority>
	</url>
  `;
		})
		.join('')}
      ${staticPages
				.map((url) => {
					return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
				})
				.join('')}
      ${documents
				.map(({ id, name }) => {
					return `
              <url>
                <loc>${baseUrl}/screens/${name.toLowerCase()}/screens/${id}</loc>
                
                <changefreq>weekly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
				})
				.join('')}
    </urlset>
  `;

	res.setHeader('Content-Type', 'text/xml');
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default Sitemap;
