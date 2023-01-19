const puppeteer = require('puppeteer');
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const capture = async () => {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto('https://www.uiland.design/');
		await page.screenshot({ path: './screenshot.png' });
		await browser.close();
	};
	capture();
}
