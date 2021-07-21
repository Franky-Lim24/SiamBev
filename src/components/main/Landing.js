import React from 'react';
import main from '../../images/main.png';
import styled from 'styled-components';

const Landing = () => {
	return (
		<Row>
			<Content>
				<Heading>SiamBev</Heading>
				<Subheading>
					<Text>
						a wholesale spirits distributor who believes that each bottle
						deserves a signature taste to be remembered by
					</Text>
				</Subheading>
			</Content>
			<ImageContainer>
				<Image src={main} alt="beverage" className="img-responsive"></Image>
			</ImageContainer>
		</Row>
	);
};

export default Landing;

const Row = styled.div`
	margin-top: 40px;
	margin-bottom: 40px;
	align-items: center;
	display: flex;
	width: 100%;
	justify-content: center;
	flex-direction: column-reverse;
	margin-left: auto;
	margin-right: auto;
	padding-left: 24px;
	padding-right: 24px;

	@media screen and (min-width: 1024px) {
		padding-left: 16px;
		padding-right: 16px;
		flex-direction: row;
	}

	@media screen and (min-width: 1280px) {
		width: 1160px;
	}

	@media screen and (min-width: 1536px) {
		width: 1280px;
	}
`;

const Text = styled.span`
	font-size: 19px;
	overflow-wrap: break-word;

	@media screen and (min-width: 1536px) {
		font-size: 21px;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	padding-left: 24px;
	padding-right: 24px;
	margin-left: auto;
	margin-right: auto;
	padding-top: 40px;
	@media screen and (min-width: 1024px) {
		max-width: 41.66666666666667%;
	}
`;

const Heading = styled.h1`
	letter-spacing: 4px;
	line-height: 1.2;
	font-weight: 700;
	color: black;
	font-family: 'Karla', sans-serif;

	@media screen and (min-width: 1024px) {
		font-size: 42px;
	}
	@media screen and (min-width: 1280px) {
		font-size: 54px;
	}
	@media screen and (min-width: 1536px) {
		font-size: 56px;
	}
`;

const Subheading = styled.p`
	font-family: 'Old Standard TT', serif;
	line-height: 1.5;
	letter-spacing: 2px;
	margin-right: 10px;
`;

const ImageContainer = styled.div`
	max-width: 100%;

	@media screen and (min-width: 1024px) {
		max-width: 58%;
	}
`;

const Image = styled.img`
	max-width: 100%;

	@media screen and (min-width: 1024px) {
		max-width: 100%;
	}

	@media screen and (min-width: 1280px) {
		max-width: 658px;
	}

	@media screen and (min-width: 1524px) {
		max-width: 728px;
	}
`;
