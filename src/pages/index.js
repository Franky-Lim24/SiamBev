import * as React from 'react';
import Header from '../components/shared/Header';
import Landing from '../components/main/Landing';
import Banner from '../components/main/Banner';
import BannerImg from '../images/banner.png';
import Production from '../components/main/Production';
import Carousel from '../components/main/Carousel';
import product1 from '../images/product1.png';
import product2 from '../images/product2.png';
import product3 from '../images/product3.png';
import product4 from '../images/product4.png';
import product5 from '../images/product5.png';
import Distribution from '../components/main/Distribution';

const IndexPage = () => {
	return (
		<main>
			<title>SiamBev</title>
			<Header />
			<Landing />
			<Banner image={BannerImg} title="Alcohol and Beverages" />
			<Production />
			<Carousel images={images} />
			<Distribution />
			<Banner image={BannerImg} title="Long Feng Baijiu" />
		</main>
	);
};

const images = [
	{
		url: product1,
		alt: 'bottle1',
	},
	{
		url: product2,
		alt: 'bottle2',
	},
	{
		url: product3,
		alt: 'bottle3',
	},
	{
		url: product4,
		alt: 'bottle4',
	},
	{
		url: product5,
		alt: 'bottle5',
	},
];

export default IndexPage;
