import React from "react";
import fs from "fs";
import { getScreensData } from "../firebase";
const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://uiland.design",
  }[process.env.NODE_ENV];

  const staticPages = fs
  .readdirSync({
    development: 'pages',
    production: './.next/server/pages',
  }[process.env.NODE_ENV])
  .filter((staticPage) => {
    return ![
      "_app.js",
      "_document.js",
      "profile.js",
      "admin.js",
      "_error.js",
      "sitemap.xml.js",
    ].includes(staticPage);
  })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const documents = await getScreensData();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
      ${documents
        .map(({ id }) => {
          return `
              <url>
                <loc>${baseUrl}/screens/${id}</loc>
                
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
