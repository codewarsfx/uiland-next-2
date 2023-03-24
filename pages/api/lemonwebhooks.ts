import { NextApiRequest, NextApiResponse } from "next/types";
import { supabase } from "../../supabase";
const crypto = require('crypto');


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const secret    = process.env.NEXT_PUBLIC_LEMON_SECRET;
    const hmac      = crypto.createHmac('sha256', secret);
    const digest    = Buffer.from(hmac.update(req.body).digest('hex'), 'utf8');
    const signature = Buffer.from(req.headers['X-Signature'] as string || '', 'utf8');
    console.log(digest,signature)
    console.log(req.body)
    try{
        const hash = crypto
        .createHmac('sha512', secret)
        .update(JSON.stringify(req.body))
        .digest('hex');
        console.log(hash)
         if (!crypto.timingSafeEqual(digest, signature)) {
        return res.status(403).json({
            message:"Error Invalid Credentials"
        })
    }else{
           console.log(digest,signature)
console.log(req.body)
    if (req.body.meta["event_name"] === 'subscription_created'||req.body.meta["event_name"] === 'subscription_updated') {
        // update the profile table when a "subscription.create" is available
     console.log("yes")
    }  
    }
    }catch (error) {
		console.error(error);
		return res.status(500).json({ message: 'Internal server error.' });
	}
   

}


