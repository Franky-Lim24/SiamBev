import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Product = ({ images }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1476,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	return (
		<Container>
			<Slider {...settings}>
				{images.map((image) => {
					return <Image src={image.url} alt={image.alt} key={image.alt} />;
				})}
			</Slider>
		</Container>
	);
};

export default Product;

const Image = styled.img`
	width: auto !important;
	height: 45vh;

	@media screen and (orientation: portrait) {
		height: 50vw;
	}
`;

const Container = styled.div`
	max-width: 100%;
	max-height: 50vh;
	padding: 0 100px 100px 100px;
	margin-bottom: 100px;

	@media screen and (orientation: portrait) {
		height: 50vw;
		padding: 0 40px 100px 40px;
	}
`;
