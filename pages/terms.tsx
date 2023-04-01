import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
function Terms() {
	const router = useRouter();
		//add canonical tag
		const canonicalUrl = (
			`https://uiland.design` + (router.asPath === '/' ? '' : router.asPath)
		).split('?')[0];
	return (
		<>
			<Head>
				<title>Uiland Terms</title>
				<meta
					name='title'
					property='og:title'
					content='Discover African and International Mobile Apps designs | Uiland - Africa’s largest mobile design reference library'
				/>
				{/* <meta
					http-equiv='Content-Security-Policy'
					content='upgrade-insecure-requests'
				/> */}
				<meta
					name='description'
					content='Discover African and International Mobile Apps designs | Uiland - Africa’s largest mobile design reference library'
				/>
				<link rel='icon' href='/favicon.ico' />

				<link rel='canonical' href={canonicalUrl} key='canonical' />
				{/* Open Graph / Facebook */}
				<meta property='og:type' content='website' />

				<meta property='og:url' content='https://uiland.design' />
				<meta property='og:title' content='uiland.design' />
				<meta
					name='description'
					property='og:description'
					content='Discover African and International Mobile Apps designs | Uiland - Africa’s largest mobile design reference library'
				/>
				<meta property='og:site_name' content='uiland.design' />
				<meta
					name='image'
					property='og:image'
					content='https://epcjufipobybxdmcqjgb.supabase.co/storage/v1/object/public/uiland-store/uiland-capture2.PNG'
				/>
				{/* Twitter */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://uiland.design' />
				<meta property='twitter:site' content='@uiland' />
				<meta property='twitter:title' content='uiland.design' />
				<meta
					property='twitter:description'
					content='Discover African and International Mobile Apps designs | Uiland - Africa’s largest mobile design reference library'
				/>
				<meta
					property='twitter:image'
					content='https://epcjufipobybxdmcqjgb.supabase.co/storage/v1/object/public/uiland-store/uiland-capture2.PNG'
				/>
				<meta name='next-head-count' content='23' />
				<meta
					name='google-site-verification'
					content='ODqtX_v3ldmmo5AB7fzcCJtP6IXdY_RDDeCK29OG6qs'
				/>
			</Head>
			<TermsComponent>
				<TermsWrapper>
					<div>
						<h1>Terms of service</h1>
						<p>
							These terms of service (“Terms”) govern your use of the
							https://uiland.design website (the “Website”) and any related
							UiLand software (the “Software”) or services (collectively, the
							“Service”) provided by UiLand Pte. Ltd. and its subsidiaries,
							representatives and affiliates (collectively, “UiLand”, “we”, “us”
							or “our”) regardless of whether you are a paid user or a
							non-paying visitor. You should also read our Privacy Policy, which
							explains how we collect and use your personal information. By
							accessing the Website or using the Service, you agree to abide by
							these Terms, our Privacy Policy , and to comply with all
							applicable laws and regulations. If you do not agree with these
							Terms, you must immediately cease the use and/or access of any
							Website or Service provided by UiLand.
						</p>
					</div>
					<div>
						<h1>Our Services</h1>
						<p>
							UiLand is a comprehensive, expert-curated library of interfaces
							from the best-in-class African digital products. It helps product
							designers find relevant design inspiration and references with
							significantly less time and effort. The materials available on
							and/or made available to you on your Website (the “Licensed
							Material”) are curated from various sources from time to time to
							ensure that they are reasonably up-to-date.
						</p>
					</div>
					<div>
						<h1>Limitations of Use</h1>
						<p>
							Please read the following limitations and restrictions carefully.
							Any breach of the limitations and/or restrictions set out in these
							Terms may result, at UiLand’s sole discretion, in the termination
							of your access to the Website and Service, and you may be exposed
							to civil and/or criminal liability. By using the Website, you
							warrant on behalf of yourself, your users, and other parties you
							represent that you will not: modify, copy, prepare derivative
							works of, decompile, or reverse engineer any materials and
							software contained on this Website; introduce any code or device
							intended to interfere with or having the effect of interfering
							adversely with, the operation of any hardware or software,
							including any bugs, worms, logic bombs, trojan horses, viruses or
							any other self-propagating or other such program that may infect
							or cause damage to the Service or UiLand’s systems or otherwise
							remove any copyright or other proprietary notations from any
							materials and software on this Website; transfer the materials to
							another person or “mirror” the materials on any other server
							without UiLand’s prior express written consent; knowingly or
							negligently use this Website or any of its associated services in
							a way that abuses or disrupts our networks or any other service
							UiLand provides; use this Website or its associated services to
							transmit or publish any harassing, indecent, obscene, fraudulent,
							or unlawful material; use this Website or its associated services
							in violation of any applicable laws or regulations; use this
							Website in conjunction with sending unauthorised advertising or
							spam; harvest, collect, or gather user data without the user’s
							consent; sell, license, or exploit for any commercial purposes any
							use of or access to the content of the Service and/or the Website;
							use this Website or its associated services in such a way that may
							infringe the privacy, intellectual property rights, or other
							rights of third parties; unauthorised use of any scraper, robot,
							bot, spider, crawler or any other automated device or means to
							access, acquire, copy or monitor any portion of the Website and
							Licensed Materials, or any data or content found or accessed
							through the Website; and create, story, access, transfer to any
							third party or otherwise distribute any material which: is
							unlawful; is or contains material which is harmful, obscene,
							defamatory, infringes any third party’s rights including any third
							party’s intellectual property rights; is or contains material
							which is of a harassing or offensive nature; contains sexually
							explicit or other offensive material; promotes the use of unlawful
							violence against a person or property; or is or contains material
							which is discriminatory based on race, origin, belief, sexual
							orientation, physical or mental disability, age or any other
							illegal category; or infringes or violates any of these Terms.
						</p>
					</div>

					<div>
						<h1>Subscriptions</h1>
						<p>
							In registering for an account with us, you must provide truthful
							and accurate information about yourself. You must safeguard your
							password (if any is in use) to the Service and keep your account
							information current. You are advised to use a strong password,
							i.e. a password that uses a combination of upper and lower case
							letters, numbers and symbols. Do not share your account details or
							give others access to your account. Please note that any form of
							account sharing (i.e. one account used by multiple users) is
							strictly prohibited. If, as, and when we detect or have any
							reasonable cause to suspect any case of account sharing, it shall
							be deemed as a serious breach of the Terms and we shall have the
							right to suspend or terminate your account upon confirmation.
						</p>
					</div>

					<div>
						<h1>Payment Terms</h1>
						<p>
							When you purchase our Plan, you expressly authorise us or our
							third-party payment processor to charge you for such Plan. You
							represent and warrant that you have the legal right to use all
							payment methods that you provide to us. In the event that you fail
							to pay the full amount owed to us, we may limit your access to the
							Services, in addition to any other rights or remedies we may have.
						</p>
					</div>
					<div>
						<h1>Authorisation for Recurring Payments</h1>
						<p>
							All pricing plans involve recurring fees (each, along with any
							applicable taxes and other charges are a “Subscription Fee”).
							Depending on which options you choose, those fees may recur
							quarterly or yearly thereafter, at the then-current rate. Please
							note that our fees are subject to change, although we will notify
							you before we effect any change. By agreeing to these Terms and
							purchasing a Plan, you acknowledge that your Plan has recurring
							payment features and you accept responsibility for all recurring
							payment obligations prior to cancellation of your Plan by you or
							UiLand. We (or our third-party payment processor) will
							automatically charge you in accordance with the term of your Plan
							(e.g., every quarter or year), on the calendar day corresponding
							to the commencement of your Plan using the payment information you
							have provided. In the event your Plan begins on a day not
							contained in a later month, your payment method will be charged on
							such other day as we deem appropriate. For example, if you started
							a yearly Plan on January 31st 2022, your next payment date is
							likely to be January 31st 2023, and your payment method would be
							billed on that date. We may also periodically authorise your
							payment method in anticipation of applicable fees or related
							charges. Your Plan continues until cancelled by you or we
							terminate your access to or use of the Services or the Plan in
							accordance with these Terms.
						</p>
					</div>
					<div>
						<h1>Taxes</h1>
						<p>
							Subscription Fees do not include taxes, and you agree to pay all
							sales/use, gross receipts, value-added, GST, personal property, or
							other tax (including any interest and penalties) with respect to
							the transactions and payments under these Terms.
						</p>
					</div>

					<div>
						<h1>Refund Policy</h1>
						<p>
							Strictly no refunds will be offered unless required by the law or
							at UiLand’s sole discretion, if any.
						</p>
					</div>
					<div>
						<h1>Cancellation Policy</h1>
						<p>
							You may cancel your Plan any time but please note that such
							cancellation will only be effective at the end of the then-current
							Plan period. Unless required by law, you will not receive a refund
							of any portion of the subscription fee paid for the then-current
							subscription period at the time of cancellation.
						</p>
					</div>
					<div>
						<h1>Intellectual Policy</h1>
						<p>
							Given that the Company deals with complex software engineering and
							creations, we are very cautious with our intellectual property
							rights (“IPRs”). Please read the following carefully.
						</p>
					</div>
					<div>
						<h1>UiLand’s Rights</h1>
						<p>
							The intellectual property in the materials contained in this
							Website are owned by or licensed to UiLand and are protected by
							applicable copyright and trade marks and other intellectual
							property rights. The title to, rights and interest in the
							intellectual property of UiLand shall remain vested in UiLand or
							UiLand’s third party licensors (where relevant). For all
							derivative works produced with the use of the Licensed Materials
							available on our Website or Service made available to you belongs
							to UiLand. You shall comply to these Terms and respect UiLand’s
							IPRs. Without derogating from UiLand’s rights under these Terms or
							under any applicable law, you are advised that any attempted
							actual infringement of the intellectual property of UiLand will
							result in the termination of all your rights under these Terms.
							Failure to comply with these Terms may result in us taking the
							necessary actions that we reasonably deem appropriate.
						</p>
					</div>
					<div>
						<h1>Your’s Rights</h1>
						<p>
							We grant our users who have subscribed to Personal, Team or
							Enterprise Plan permission to download one (1) copy of the
							Licensed Material for personal, non-commercial transitory use. For
							the avoidance of doubt, this constitutes the grant of a license,
							not a transfer of title. This license shall automatically
							terminate if you violate any of these restrictions or the Terms,
							and may be terminated by UiLand at any time. You are prohibited to
							use any Licensed Materials that you have downloaded (in any form)
							for any other purposes that are not ordinarily incidental to our
							Service, including but not limited to recreating and replicating
							part of or whole of our Services. It shall be deemed as a serious
							breach of the Terms and UiLand shall have the right to pursue any
							legal liabilities in relation to this.
						</p>
					</div>
					<div>
						<h1>Copyright Holders’ Rights</h1>
						<p>
							Our Website contains screenshots of third parties’ application
							interface and design (the “Screenshots”). The Screenshots contain
							images and artwork that are both copyright and trademark protected
							by their respective owners (“Copyright Holders”). UiLand does not
							claim to have ownership of any features within these Screenshots,
							and we solely captured and used the Screenshots purely for the
							purposes of providing our Service. Citations, images, and
							paraphrasing may only be published elsewhere in limited extent,
							and only if crediting the Copyright Holders. Copyright Holders may
							reach out to us to request for the Screenshots to be removed at:
							38,balarabe Musa ,victoria island,lagos , Nigeria, or via email to
							gudoski30@gmail.com.
						</p>
					</div>
					<div>
						<h1>Fair Use</h1>
						<p>
							You may make use of all the Licensed Materials available on our
							Website as is consistent with the Fair Use Provisions of the
							Copyright Act 2021 of Lagos,Nigeria and any relevant provision(s)
							under international law. Nothing in these Terms is intended to
							limit in any way whatsoever your rights under the Fair Use
							provisions of Lagos,Nigeria or international law to use the
							Licensed Materials. UiLand disclaims its obligations and
							liabilities that arises from your violation of the Fair Use
							Provisions under Lagos,Nigeria law or otherwise. You are to bear
							sole responsibility for the use of the Licensed Materials outside
							of the Website and the Service.
						</p>
					</div>
					<div>
						<h1>User Generated Content</h1>
						<p>
							You retain your intellectual property ownership rights over
							content you submit to us for publication on our website. We do not
							and will never claim ownership of your content, except in cases
							that we obtain a license from you. When you use our Website or its
							associated services to post, upload, share, or otherwise transmit
							content covered by IPRs, you grant to us a non-exclusive,
							royalty-free, transferable, sub-licensable, worldwide license to
							use, distribute, modify, run, copy, publicly display, translate,
							or otherwise create derivative works of your content in a manner
							that is consistent with your privacy preferences and our Privacy
							Policy. The license you grant us can be terminated at any time by
							deleting your content or account. However, to the extent that we
							(or our partners) have used your content in connection with
							commercial or sponsored content, the license will continue until
							the relevant commercial or post has been discontinued by us. You
							agree to give us permission to use your username and other
							identifying information associated with your account in a manner
							that is consistent with your privacy preferences, and our Privacy
							Policy.
						</p>
					</div>
					<div>
						<h1>Disclaimer of Liability</h1>
						<p>
							Our Website and the materials on our Website are provided on an
							&lsquo;as is&rsquo; basis and it is solely for reference only. To
							the extent permitted by law, UiLand makes no warranties, expressed
							or implied, and hereby disclaims and negates all other warranties
							including, without limitation, implied warranties or conditions of
							merchantability, fitness for a particular purpose, or
							non-infringement of intellectual property, or other violation of
							rights. In no event shall UiLand or its suppliers be liable for
							any consequential loss suffered or incurred by you or any third
							party arising from the use or inability to use this Website or the
							materials on this Website, even if UiLand or an authorized
							representative has been notified, orally or in writing, of the
							possibility of such damage. For the purpose of these Terms,
							“consequential loss” includes any consequential loss, indirect
							loss, real or anticipated loss of profit, loss of benefit, loss of
							revenue, loss of business, loss of goodwill, loss of opportunity,
							loss of savings, loss of reputation, loss of use and/or loss or
							corruption of data, whether under statute, contract, equity, tort
							(including negligence), indemnity, or otherwise. Because some
							jurisdictions do not allow limitations on implied warranties, or
							limitations of liability for consequential or incidental damages,
							these limitations may not apply to you.
						</p>
					</div>
					<div>
						<h1>Indemnification</h1>
						<p>
							You agree to indemnify UiLand and hold harmless UiLand and its
							employees, officers, directors and agents, as well as all
							third-party Copyright Holders of the Screenshots from and against
							all claims, damages, costs, expenses, losses and liabilities
							(including but not limited to legal costs and expenses on a full
							indemnity basis) that arise directly or indirectly as a result
							from: your access to and use of the Licensed Materials and
							Service; any claim by any third party that its intellectual
							property rights have been infringed as a result from your use of
							the Licensed Materials and Service; any claim by any third party
							that any provision of the Copyright Act 2021 has been contravened
							in respect to copyright resulting from your use of the Licensed
							Materials and Service; and any violation of these Terms by you.
							You also acknowledge you will be a responsible user and that
							UiLand will not be responsible for dispute between you and any
							third party in relation to your use of the Website and Licensed
							Materials.
						</p>
					</div>
					<div>
						<h1>Accuracy of Materials</h1>
						<p>
							The materials appearing on our Website are not comprehensive and
							are for general reference purposes only. UiLand does not warrant
							or make any representations concerning the accuracy, likely
							results, or reliability of the use of the materials on this
							Website, or otherwise relating to such materials or on any
							resources linked to this website.
						</p>
					</div>
					<div>
						<h1>Links</h1>
						<p>
							In the case where you are linked to any external website from our
							Website, UiLand has not reviewed any of such external websites and
							shall not be responsible for the contents of any such linked
							sites. The inclusion of any link does not imply endorsement,
							approval, or control by UiLand. Use of any such linked site is at
							your own risk and we strongly advise you to do your own
							investigations with respect to the suitability of those sites.
						</p>
					</div>
					<div>
						<h1>Modifications of Terms</h1>
						<p>
							We reserve the right to review and amend any of these Terms of
							Service at our sole discretion from time to time. Upon doing so,
							we will update our Website and provide you with reasonable notice
							of such changes, such as to the email address which you have
							provided to us. Unless otherwise stated, any changes to these
							Terms of Service will take effect immediately once actual or
							constructive notice is given to you, which includes publication on
							our Website. Your continued use of the Website after UiLand
							provides such notice will confirm your acceptance of the changes.
							If you do not agree to the amended Terms, you must stop accessing
							and using the Service and the Website. We recommend that you
							review the Terms periodically for updates and for the avoidance of
							doubt, we do not assume any responsibility for ensuring your
							attention and/or understanding to these Terms.
						</p>
					</div>
					<div>
						<h1>Modifications to the Service and Software</h1>
						<p>
							UiLand may at its own discretion and without providing prior
							notice, modify, adapt or change the Software, the Service’s
							features, the user interface and design, the extent and
							availability of the material in the Service and any other aspect
							related to the Service. You shall have no claim, complaint, or
							demand against UiLand for effecting such changes or for failures
							incidental to such changes.
						</p>
					</div>
					<div>
						<h1>Right to Terminate</h1>
						<p>
							We may at our sole discretion suspend or terminate your access to
							our Website and terminate these Terms immediately upon written
							notice to you for any breach of these Terms of Service.
						</p>
					</div>
					<div>
						<h1>Severance</h1>
						<p>
							Any term of these Terms which is wholly or partially void or
							unenforceable is severed to the extent that it is void or
							unenforceable. The validity of the remainder of these Terms is not
							affected.
						</p>
					</div>
					<div>
						<h1>Governing Law</h1>
						<p>
							These Terms are governed by and construed in accordance with the
							laws of Lagos,Nigeria. You irrevocably submit to the exclusive
							jurisdiction of the courts in Lagos,Nigeria.
						</p>
					</div>
					<div>
						<h1>Contact</h1>
						<p>
							For any questions or concerns regarding this document, you may
							contact us via email at gudoski30@gmail.com or via post at 38,
							balarabe Musa ,victoria island ,Lagos,Nigeria .
						</p>
					</div>
					<div>
						<p>Last updated: January 06, 2023</p>
					</div>
				</TermsWrapper>
			</TermsComponent>
		</>
	);
}

const TermsComponent = styled.div`
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	max-width: 864px;

	@media (min-width: 992px) {
		max-width: 1076px;
	}

	@media only screen and (min-width: 64em) {
		max-width: 1140px;
	}
`;
const TermsWrapper = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;

	justify-content: center;
	p {
		font-size: 18px;
		font-weight: 400;
	}
`;

export default Terms;
