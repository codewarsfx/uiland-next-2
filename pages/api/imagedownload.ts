import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';
import type { NextApiRequest, NextApiResponse } from 'next';
const pipeline = promisify(stream.pipeline);

async function handler(req: NextApiRequest, res: NextApiResponse) {
	//get the image from the frontend
	const response = await fetch(req.body);
	//throw an error if the image is not available
	if (!response.ok)
		throw new Error(`unexpected response ${response.statusText}`);
	//add the image content type to the headers
	res.setHeader('Content-Type', 'image/png');
	await pipeline(response.body, res);
}

export default handler;
