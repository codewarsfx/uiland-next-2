import { NextApiRequest, NextApiResponse } from 'next/types';
import { supabase } from '../../supabase';
const crypto = require('crypto');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const secret = process.env.NEXT_PUBLIC_LEMON_SECRET;

	const hash = crypto
		.createHmac('sha512', secret)
		.update(JSON.stringify(req.body))
		.digest('hex');
	console.log(hash);

	console.log(req.body);
	try {
		if (hash !== req.headers['X-Signature']) {
			return res.status(403).json({
				message: 'Error Invalid Credentials',
			});
		} else {
			console.log(req.body);
			if (
				req.body.meta['event_name'] === 'subscription_created' ||
				req.body.meta['event_name'] === 'subscription_updated'
			) {
				// update the profile table when a "subscription.create" is available
				console.log('yes');
			}
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: 'Internal server error.' });
	}
}
