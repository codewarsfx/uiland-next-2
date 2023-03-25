import { supabase } from "../../supabase";
const crypto = require('crypto');
import { buffer } from 'micro'
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const signingSecret = process.env.NEXT_PUBLIC_LEMON_SECRET 
  try {
    // check that the request really came from Lemon Squeezy and is about this order

    const rawBody = (await buffer(req)).toString('utf-8')
    const hmac = crypto.createHmac('sha256', signingSecret)
    const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8')
    const signature = Buffer.from(req.headers['x-signature'] as string, 'utf8')
console.log(digest)
console.log("wow")
console.log(signature)
    if (!crypto.timingSafeEqual(digest, signature)) {
      return res.status(400).json({
        message: 'Invalid signature.',
      })
    }

    const payload = JSON.parse(rawBody)

    const {
      meta: {
        event_name: eventName,
      },
    } = payload
    console.log(eventName)
      if (eventName === 'subscription_created') {
        console.log('got here',eventName)
        const insertToProfile = async () => {
            const { data, error } = await supabase
                .from('profile')
                .update({
                    event: 'subscription.create',
                    status: 'subscription.create',
                    amount: payload.attributes.total,
                    currency: payload.attributes.currency,
                    authorization_code: '',
                    next_payment_date: payload.attributes.ends_at,
                    created_date_at: payload.attributes.created_at,
                    exp_month: payload.attributes.ends_at,
                    plan_name: payload.attributes.product_name,
                    plan_interval: '',
                    signature: '',
                    bank: payload.attributes.card_brand,
                    card_type: payload.attributes.card_brand,
                    brand: payload.attributes.card_brand,
                    subscription_code: '',
                })
                //This is the bridge between the response from paystack and our database (the email is the same in both)
                .eq('email', payload.attributes.user_email)
                .select();
        }
        await  insertToProfile();
            return res.status(200).json({
                status: true,
                message: 'Subscription successfull!',
            });
        };
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





