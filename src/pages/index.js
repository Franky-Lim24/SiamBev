import * as React from 'react';
import Header from '../components/shared/Header';
import Landing from '../components/main/Landing';
import Banner from '../components/main/Banner';
import BannerImg from '../images/banner.png';
import BannerImg2 from '../images/banner2.png';
import Production from '../components/main/Production';
import Carousel from '../components/main/Carousel';
import Distribution from '../components/main/Distribution';
import History from '../components/main/History';
import Product from '../components/main/Product';
import { bottles } from '../components/data/bottles';
import { products } from '../components/data/products';

const IndexPage = () => {
	return (
		<main>
			<title>SiamBev</title>
			<Header />
			<Landing />
			<Banner image={BannerImg} title="Alcohol and Beverages" />
			<Production />
			<Carousel images={products} />
			<Distribution />
			<Banner image={BannerImg} title="Long Feng Baijiu" />
			<History />
			<Product images={bottles} />
			<Banner image={BannerImg2} title="Contact Us" />
		</main>
	);
};

export default IndexPage;
