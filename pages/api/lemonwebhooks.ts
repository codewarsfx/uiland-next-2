// import { NextApiRequest, NextApiResponse } from 'next/types';
// import { supabase } from '../../supabase';
// import { CiLogin } from 'react-icons/ci';
// import type { Readable } from 'node:stream';

// const crypto = require('crypto');

// export const config = {
// 	api: {
// 	  bodyParser: false,
// 	},
//   }
// async function buffer(readable: Readable) {
// 	const chunks = [];
// 	for await (const chunk of readable) {
// 	  chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
// 	}
// 	return Buffer.concat(chunks);
//   }
 
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// 	const secret = process.env.NEXT_PUBLIC_LEMON_SECRET;
// 	if (req.method !== 'POST') {
// 		// you can see whether a webhook delivers successfully in your Lemon Squeezy account
// 		// -> Settings -> Webhooks -> Recent deliveries
// 		return res.status(405).json({
// 		  message: 'Method not allowed',
// 		})
// 	  }
// 	try {
	

// 		const hash = crypto
// 			.createHmac('sha256', secret)
// 			.update(JSON.stringify(req.body))
// 			.digest('hex');


// 			const buf = await buffer(req);
// 			const rawBody = buf.toString('utf8');
		
			
// 			const hmac      = crypto.createHmac('sha256', secret);
// 			const digest    = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8');
// 			const signature = Buffer.from(req.headers['x-signature'] as string, 'utf8')

// 		console.log(digest);
// 		console.log("wow");
// 		console.log(hash);
// 		console.log('wow');
// 		console.log(req.headers['x-signature']);
// 		console.log('wow');
// 		console.log(signature);
// 		if (digest !== signature) {
// 			return res.status(403).json({
// 				message: 'Error Invalid Credentials',
// 			});
// 		} else if (digest === signature) {
// 			console.log(req.body);
// 			if (req.body.meta['event_name'] === 'subscription_created') {
// 				// update the profile table when a "subscription.create" is available
// 				const insertToProfile = async () => {
// 					const { data, error } = await supabase
// 						.from('profile')
// 						.update({
// 							event: 'subscription.create',
// 							status: 'active',
// 							amount: req.body.data.attributes.total,
// 							currency: req.body.data.attributes.currency,
// 							authorization_code: '',
// 							next_payment_date: req.body.data.attributes.ends_at,
// 							created_date_at: req.body.data.attributes.created_at,
// 							exp_month: req.body.data.attributes.ends_at,
// 							plan_name: req.body.data.attributes.product_name,
// 							plan_interval: '',
// 							signature: '',
// 							bank: req.body.data.attributes.card_brand,
// 							card_type: req.body.data.attributes.card_brand,
// 							brand: req.body.data.attributes.card_brand,
// 							subscription_code: '',
// 						})
// 						//This is the bridge between the response from paystack and our database (the email is the same in both)
// 						.eq('email', req.body.data.attributes.user_email)
// 						.select();
// 					return res.status(200).json({
// 						status: true,
// 						message: 'Order placed successfully!',
// 					});
// 				};
// 				insertToProfile();
// 			} else if (req.body.meta['event_name'] === 'subscription_updated') {
// 				const insertToProfile = async () => {
// 					const { data, error } = await supabase
// 						.from('profile')
// 						.update({
// 							event: 'subscription.create',
// 							status: 'reactivated',
// 							amount: req.body.data.attributes.total,
// 							currency: req.body.data.attributes.currency,
// 							authorization_code: '',
// 							next_payment_date: req.body.data.attributes.ends_at,
// 							created_date_at: req.body.data.attributes.created_at,
// 							exp_month: req.body.data.attributes.ends_at,
// 							plan_name: req.body.data.attributes.product_name,
// 							plan_interval: '',
// 							signature: '',
// 							bank: req.body.data.attributes.card_brand,
// 							card_type: req.body.data.attributes.card_brand,
// 							brand: req.body.data.attributes.card_brand,
// 							subscription_code: '',
// 						})
// 						//This is the bridge between the response from paystack and our database (the email is the same in both)
// 						.eq('email', req.body.data.attributes.user_email)
// 						.select();
// 					return res.status(200).json({
// 						status: true,
// 						message: 'Order updated successfully!',
// 					});
// 				};
// 				insertToProfile();
// 			}
// 		}
// 	} catch (error) {
// 		console.error(error);
// 		return res.status(500).json({ message: 'Internal server error.' });
// 	}
// 	}


























	import type { NextApiResponse, NextApiRequest } from 'next'
import { buffer } from 'micro'
import crypto from 'crypto'

// you might need to extend this if you need additional properties from the request body
// details: https://docs.lemonsqueezy.com/api/webhooks
export interface ResBody extends NextApiRequest {
  body: {
    meta: {
      event_name: 'order_created' | 'order_refunded'
      custom_data: {
        // this is where any custom checkout parameters will be accessible
        // details: https://docs.lemonsqueezy.com/api/checkouts#create-a-checkout
        userId: string
      }
    }
    data: {
      id: string
      attributes: {
        identifier: string
      }
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: ResBody, res: NextApiResponse) {
  // you need to set this webhook secret inside your Lemon Squeezy account
  // Settings -> Webhooks -> create or click on a webhook URL, set the secret
  const signingSecret = process.env.NEXT_PUBLIC_LEMON_SECRET || ''

  if (req.method !== 'POST') {
    // you can see whether a webhook delivers successfully in your Lemon Squeezy account
    // -> Settings -> Webhooks -> Recent deliveries
    return res.status(405).json({
      message: 'Method not allowed',
    })
  }

  try {
    // check that the request really came from Lemon Squeezy and is about this order
    const rawBody = (await buffer(req)).toString('utf-8')
    const hmac = crypto.createHmac('sha256', signingSecret)
    const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8')
    const signature = Buffer.from(req.headers['x-signature'] as string, 'utf8')

    if (!crypto.timingSafeEqual(digest, signature)) {
      return res.status(400).json({
        message: 'Invalid signature.',
      })
    }

    const payload: ResBody['body'] = JSON.parse(rawBody)

    const {
      meta: {
        event_name: eventName,
        // userId is a custom checkout variable I am using
        custom_data: { userId },
      },
      data: {
        id: orderId,
        attributes: { identifier },
      },
    } = payload

    if (eventName === 'order_created') {
      // do something when a new purchase comes in
    } else if (eventName === 'order_refunded') {
      // do something when the purchase is refunded
    } else if (eventName === '') {
      // do somthing with any of the following events:
      // - subscription_created
      // - subscription_cancelled
      // - subscription_resumed
      // - subscription_expired
      // - subscription_paused
      // - subscription_unpaused
      // - subscription_payment_failed
      // - subscription_payment_success
      // - subscription_payment_recovered
      // - license_key_created
    } else {
      return res.status(400).json({
        message: `Unknown event name: ${eventName} for order: ${identifier} (${orderId})`,
      })
    }
  } catch (e: unknown) {
    if (typeof e === 'string') {
      return res.status(400).json({
        message: `Webhook error: ${e}`,
      })
    }
    if (e instanceof Error) {
      return res.status(400).json({
        message: `Webhook error: ${e.message}`,
      })
    }
    throw e
  }

  // if no errors occur, respond with a 200 success
  res.send({ received: true })
}