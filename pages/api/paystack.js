// Require the library
const axios = require("axios");
const pstk_secret = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_TEST_KEY // Never commit secret keys to the repo.
const paystack_api = 'https://api.paystack.co/'
const paystack_headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${pstk_secret}`
}
axios.create({ paystack_api, responseType: 'json' })
export default function handler(req, res) {

console.log(req.body)
axios.get(`${paystack_api}transaction/verify/${req.body}`, { headers: paystack_headers }).then((result) => {
    console.log(result.data);
console.log(req.headers)
    res.send(result)
  
   
}, (error) => {
    console.log(error);
    res.send({
        'status': false,
        'message': "something went wrong"
    })
})




}