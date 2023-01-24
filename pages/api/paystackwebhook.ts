var crypto = require('crypto');
import { supabase } from '../../supabase';
var secret = process.env.NEXT_PUBLIC_PAYSTACK_SECRET_TEST_KEY;

// Using Express
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	//validate event
	try {
		const hash = crypto
			.createHmac('sha512', secret)
			.update(JSON.stringify(req.body))
			.digest('hex');
		if (hash == req.headers['x-paystack-signature']) {
			if (req.body.event === 'subscription.create') {
				// update the profile table when a "subscription.create" is available
				const insertToProfile = async () => {
					const { data, error } = await supabase
						.from('profile')
						.update({
							event: req.body.event,
							status: req.body.data.status,
							amount: req.body.data.amount,
							currency: req.body.data.plan.currency,
							authorization_code:
								req.body.data.authorization.authorization_code,
							next_payment_date: req.body.data.next_payment_date,
							created_date_at: req.body.data.createdAt,
							exp_month: req.body.data.authorization.exp_month,
							plan_name: req.body.data.plan.name,
							plan_interval: req.body.data.plan.interval,
							signature: req.body.data.authorization.signature,
							bank: req.body.data.authorization.bank,
							card_type: req.body.data.authorization.card_type,
							brand: req.body.data.authorization.brand,
							subscription_code: req.body.data.subscription_code,
						})
						//This is the bridge between the response from paystack and our database (the email is the same in both)
						.eq('email', req.body.data.customer.email)
						.select();

					return res.json({
						status: true,
						message: 'Order placed successfully!',
					});
				};
				insertToProfile();
			} else if (
				req.body.event === 'subscription.not_renew' ||
				req.body.event === 'subscription.disable'
			) {
				const insertToProfile = async () => {
					const { data, error } = await supabase
						.from('profile')
						.update({
							event: '',
							status: req.body.data.status,
							amount: req.body.data.amount,
							currency: req.body.data.plan.currency,
							authorization_code:
								req.body.data.authorization.authorization_code,
							next_payment_date: req.body.data.next_payment_date,
							created_date_at: req.body.data.createdAt,
							exp_month: req.body.data.authorization.exp_month,
							plan_name: req.body.data.plan.name,
							plan_interval: req.body.data.plan.interval,
							signature: req.body.data.authorization.signature,
							bank: req.body.data.authorization.bank,
							card_type: req.body.data.authorization.card_type,
							brand: req.body.data.authorization.brand,
							subscription_code: req.body.data.subscription_code,
						})
						//This is the bridge between the response from paystack and our database (the email is the same in both)
						.eq('email', req.body.data.customer.email)
						.select();

					return res.json({ status: true, message: 'Order cancelled!' });
				};
				insertToProfile();
			}
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: 'Internal server error.' });
	}
}
