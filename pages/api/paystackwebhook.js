var crypto = require('crypto');
var secret = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_TEST_KEY;
// Using Express
export default function handler(req, res) {
    //validate event
    const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');
    console.log(req.headers)
    console.log(hash)
    console.log(req.headers['x-paystack-signature'])
    if (hash == req.headers['x-paystack-signature']) {
    // Retrieve the request's body
    const event = req.body;
    // Do something with event  
    console.log(req.body)
    res.send(req.body)
    }
    res.send(200);
}