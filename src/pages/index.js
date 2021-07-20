import * as React from 'react';
import Header from '../components/shared/Header';
import Landing from '../components/main/Landing';
import Banner from '../components/main/Banner';
import BannerImg from '../images/banner.webp';
import Production from '../components/main/Production';

const IndexPage = () => {
	return (
		<main>
			<title>SiamBev</title>
			<Header></Header>
			<Landing></Landing>
			<Banner image={BannerImg} title="Alcohol and Beverages"></Banner>
			<Production></Production>
		</main>
	);
};

export default IndexPage;
