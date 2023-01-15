
// // Require the library
// const axios = require("axios");
// // Never commit secret keys to the repo.
// const paystack_api = "https://api.paystack.co/";
// axios.create({ paystack_api, responseType: "json" });
// export default function handler(req, res) {
 
//   axios
//     .post(`${paystack_api}apple-pay/domain`, {
        
//         headers: {
//             'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET_TEST_KEY}`,
//             "Content-Type": "application/json",
//         },
//         params: { 
//             "domainName": "https://uiland.design"
//         }
//     })
//     .then(
//       (result) => {
//         console.log(result);
//         res.send(result.data);
//       },
//       (error) => {
//         console.log(error);
//         res.send({
//           status: false,
//           message: "something went wrong",
//         });
//       }
//     );
// }
