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
import History from '../components/main/History';
import Product from '../components/main/Product';
import bottle1 from '../images/bottle1.png';
import bottle2 from '../images/bottle2.png';
import bottle3 from '../images/bottle3.png';
import bottle4 from '../images/bottle4.png';
import bottle5 from '../images/bottle5.png';
import bottle6 from '../images/bottle6.png';
import bottle7 from '../images/bottle7.png';
import bottle8 from '../images/bottle8.png';
import bottle9 from '../images/bottle9.png';

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
			<History />
			<Product images={products} />
		</main>
	);
};

const products = [
	{
		url: bottle1,
		alt: 'bottle1',
	},
	{
		url: bottle2,
		alt: 'bottle3',
	},
	{
		url: bottle3,
		alt: 'bottle3',
	},
	{
		url: bottle4,
		alt: 'bottle4',
	},
	{
		url: bottle5,
		alt: 'bottle5',
	},
	{
		url: bottle6,
		alt: 'bottle6',
	},
	{
		url: bottle7,
		alt: 'bottle7',
	},
	{
		url: bottle8,
		alt: 'bottle8',
	},
	{
		url: bottle9,
		alt: 'bottle9',
	},
];

const images = [
	{
		url: product1,
		alt: 'product1',
	},
	{
		url: product2,
		alt: 'product2',
	},
	{
		url: product3,
		alt: 'product3',
	},
	{
		url: product4,
		alt: 'product4',
	},
	{
		url: product5,
		alt: 'product5',
	},
];

export default IndexPage;
