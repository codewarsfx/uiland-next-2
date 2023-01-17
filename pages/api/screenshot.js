const puppeteer = require('puppeteer');
export default function handler(req, res) {
	const capture = async () => {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto('https://www.uiland.design/');
		await page.screenshot({ path: './screenshot.png' });
		await browser.close();
	};
	capture();
}
