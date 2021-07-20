import * as React from 'react';
import Header from '../components/shared/Header';
import Landing from '../components/main/Landing';
import Banner from '../components/shared/Banner';
import BannerImg from '../images/banner.webp';

const IndexPage = () => {
	return (
		<main>
			<title>SiamBev</title>
			<Header></Header>
			<Landing></Landing>
			<Banner image={BannerImg} title="Alcohol and Beverages"></Banner>
		</main>
	);
};

export default IndexPage;
