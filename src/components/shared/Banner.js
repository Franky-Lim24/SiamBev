import React from 'react';
import styled from 'styled-components';

const Banner = ({ title, image }) => {
	return (
		<BannerContainer src={image}>
			<Text>{title}</Text>
		</BannerContainer>
	);
};

export default Banner;

const BannerContainer = styled.div`
	width: 100%;
	padding-bottom: 40px;
	padding-top: 40px;
	min-height: 200px;
	padding-left: 24px;
	background-image: linear-gradient(
			rgba(0, 0, 0, 0.48) 0%,
			rgba(0, 0, 0, 0.48) 100%
		),
		url(${(props) => props.src});
	background-repeat: no-repeat;
	background-position: center;
	background-size: auto, cover;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-right: 24px;
`;

const Text = styled.p`
	color: white;
	line-height: 1.125;
	font-size: 25px;
	font-weight: 700;
	font-family: 'Karla', sans-serif;
	letter-spacing: 2px;
	margin: 0;
	text-align: center;
	overflow-wrap: break-word;

	@media screen and (min-width: 767px) {
		padding-bottom: 100px;
		padding-top: 100px;
	}

	@media screen and (min-width: 1024px) {
		font-size: 26px;
	}

	@media screen and (min-width: 1280px) {
		font-size: 28px;
	}

	@media screen and (min-width: 1536px) {
		font-size: 32px;
	}
`;
