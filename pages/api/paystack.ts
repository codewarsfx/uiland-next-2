// Require the library
const axios = require('axios');
// Never commit secret keys to the repo.
const paystack_api = 'https://api.paystack.co/';
const paystack_headers = {
	'Content-Type': 'application/json',
	Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET_TEST_KEY}`,
};
axios.create({ paystack_api, responseType: 'json' });
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	axios
		.get(`${paystack_api}transaction/verify/${req.body}`, {
			headers: paystack_headers,
		})
		.then(
			(result) => {
				res.send(result.data);
			},
			(error) => {
				res.send({
					status: false,
					message: 'something went wrong',
				});
			}
		);
}
