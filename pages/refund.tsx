import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
function Refund() {
	const router = useRouter();

	//add canonical tag
	const canonicalUrl = (
		`https://uiland.design` + (router.asPath === '/' ? '' : router.asPath)
	).split('?')[0];
	return (
		<>
			<Head>
				<title>Uiland Refund</title>
				<meta
					name='title'
					property='og:title'
					content='Discover African and International Mobile Apps designs | Uiland - Africa’s largest mobile design reference library'
				/>
				<meta
					http-equiv='Content-Security-Policy'
					content='upgrade-insecure-requests'
				/>
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

			<RefundComponent>
				<RefundWrapper>
					<div>
						<h1>Refund Policy</h1>
					</div>
					<p>
						Thanks for subscribing to our services at https://uiland.design
						operated by UiLand. We offer a full money-back guarantee for all
						purchases made on our website. If you are not satisfied with the
						product that you have purchased from us, you can get your money back
						no questions asked. You are eligible for a full reimbursement within
						14 calendar days of your purchase. After the 14-day period you will
						no longer be eligible and won&apos;t be able to receive a refund. We
						encourage our customers to try the service in the first two weeks
						after their purchase to ensure it fits your needs. If you have any
						additional questions or would like to request a refund, feel free to
						contact us at design@uiland.design
					</p>
				</RefundWrapper>
			</RefundComponent>
		</>
	);
}

const RefundComponent = styled.div`
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
const RefundWrapper = styled.div`
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
export default Refund;
