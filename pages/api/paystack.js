// Require the library
var paystack = require("paystack-api")(process.env.REACT_APP_PAYSTACK__SECRET_KEY);


export default function handler(req, res) {
// paystack.{resource}.{method}

const result= paystack.customer
  .list()
  .then(function(body) {
    console.log(body);
  })
  .catch(function(error) {
    console.log(error);
  });
res.send(result)

}