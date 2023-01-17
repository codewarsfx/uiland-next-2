const mailchimp = require('@mailchimp/mailchimp_marketing');

// export default function handler(req, res) {

//   mailchimp.setConfig({
//     apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
//     server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX,
//   });

//   async function run() {
//     const response = await mailchimp.ping.get();
//     console.log(response);
//     res.send(response)
//   }

//   run();
// }

export default function handler(req, res) {
	mailchimp.setConfig({
		apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
		server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX,
	});
	const user = JSON.parse(req.body);
	const listId = process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID;
	const fullName = user.user_metadata.full_name.split(' ');
	const firstName = fullName[1];
	const lastName = fullName[0];
	const subscribingUser = {
		firstName: firstName,
		lastName: lastName,
		email: user.email,
	};

	async function run() {
		const response = await mailchimp.lists.addListMember(listId, {
			email_address: subscribingUser.email,
			status: 'subscribed',
			merge_fields: {
				FNAME: subscribingUser.firstName,
				LNAME: subscribingUser.lastName,
			},
		});
		if (response) {
			console.log(
				`Successfully added contact as an audience member. The contact's id is ${response.id}.`
			);
		} else {
			console.log(
				`Failed added contact as an audience member.This is an existing user. The contact's id is ${response}.`
			);
		}
	}

	run();
}
