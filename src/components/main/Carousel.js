import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1476,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
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

export default Carousel;

const Image = styled.img`
	width: auto !important;
	height: 50vh;
`;

const Container = styled.div`
	max-width: 100%;
	max-height: 50vh;
	padding: 0 100px 100px 100px;
`;
