import { NextApiRequest, NextApiResponse } from 'next/types';
import { supabase } from '../../supabase';
import { CiLogin } from 'react-icons/ci';
import type { Readable } from 'node:stream';

const crypto = require('crypto');

export const config = {
	api: {
	  bodyParser: false,
	},
  }
async function buffer(readable: Readable) {
	const chunks = [];
	for await (const chunk of readable) {
	  chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
	}
	return Buffer.concat(chunks);
  }
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const secret = process.env.NEXT_PUBLIC_LEMON_SECRET;
	if (req.method !== 'POST') {
		// you can see whether a webhook delivers successfully in your Lemon Squeezy account
		// -> Settings -> Webhooks -> Recent deliveries
		return res.status(405).json({
		  message: 'Method not allowed',
		})
	  }
	try {
	

		const hash = crypto
			.createHmac('sha256', secret)
			.update(JSON.stringify(req.body))
			.digest('hex');


			const buf = await buffer(req);
			const rawBody = buf.toString('utf8');
		
			
			const hmac      = crypto.createHmac('sha256', secret);
			const digest    = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8');
			const signature = Buffer.from(req.headers['x-signature'] as string, 'utf8')

		console.log(digest);
		console.log("wow");
		console.log(hash);
		console.log('wow');
		console.log(req.headers['x-signature']);
		console.log('wow');
		console.log(signature);
		if (digest !== signature) {
			return res.status(403).json({
				message: 'Error Invalid Credentials',
			});
		} else if (digest === signature) {
			console.log(req.body);
			if (req.body.meta['event_name'] === 'subscription_created') {
				// update the profile table when a "subscription.create" is available
				const insertToProfile = async () => {
					const { data, error } = await supabase
						.from('profile')
						.update({
							event: 'subscription.create',
							status: 'active',
							amount: req.body.data.attributes.total,
							currency: req.body.data.attributes.currency,
							authorization_code: '',
							next_payment_date: req.body.data.attributes.ends_at,
							created_date_at: req.body.data.attributes.created_at,
							exp_month: req.body.data.attributes.ends_at,
							plan_name: req.body.data.attributes.product_name,
							plan_interval: '',
							signature: '',
							bank: req.body.data.attributes.card_brand,
							card_type: req.body.data.attributes.card_brand,
							brand: req.body.data.attributes.card_brand,
							subscription_code: '',
						})
						//This is the bridge between the response from paystack and our database (the email is the same in both)
						.eq('email', req.body.data.attributes.user_email)
						.select();
					return res.status(200).json({
						status: true,
						message: 'Order placed successfully!',
					});
				};
				insertToProfile();
			} else if (req.body.meta['event_name'] === 'subscription_updated') {
				const insertToProfile = async () => {
					const { data, error } = await supabase
						.from('profile')
						.update({
							event: 'subscription.create',
							status: 'reactivated',
							amount: req.body.data.attributes.total,
							currency: req.body.data.attributes.currency,
							authorization_code: '',
							next_payment_date: req.body.data.attributes.ends_at,
							created_date_at: req.body.data.attributes.created_at,
							exp_month: req.body.data.attributes.ends_at,
							plan_name: req.body.data.attributes.product_name,
							plan_interval: '',
							signature: '',
							bank: req.body.data.attributes.card_brand,
							card_type: req.body.data.attributes.card_brand,
							brand: req.body.data.attributes.card_brand,
							subscription_code: '',
						})
						//This is the bridge between the response from paystack and our database (the email is the same in both)
						.eq('email', req.body.data.attributes.user_email)
						.select();
					return res.status(200).json({
						status: true,
						message: 'Order updated successfully!',
					});
				};
				insertToProfile();
			}
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: 'Internal server error.' });
	}
	}
