import React from 'react';
import styled from 'styled-components';
import img from '../../images/production.png';

const Production = () => {
	return (
		<Container>
			<ImageContainer>
				<Image src={img} alt="production" />
			</ImageContainer>
			<Content>
				<Heading>In-House Production & Packaging</Heading>
				<Subheading>
					<span>
						At SiamBev, we empower our retailers to create an exclusive taste &
						brand experience. As we are the
						<strong> Original Equipment Manufacturer </strong>
						(OEM), SiamBev uses state-of-the-art facilities to distill unique
						spirits.
					</span>
				</Subheading>
				<Break>
					<span> </span>
				</Break>
				<Subheading>
					<span>
						Be it European selections such as Whisky, or international
						alternatives such as Baijiu, SiamBev is equipped to produce and
						package these spirits. As the
						<strong> Original Design Manufacturer</strong> (ODM), SiamBev
						provides a catalog of readily available spirits that can be adjusted
						in terms of product packaging and minor specifications in spirit
						contents.
					</span>
				</Subheading>
			</Content>
		</Container>
	);
};

export default Production;

const Break = styled.p`
	line-height: 1.8;
`;
const ImageContainer = styled.div`
	max-width: 100%;
	flex-basis: 50%;
	padding-right: 12px;
	padding-left: 12px;
	display: flex;
	align-item: center;
	justify-content: center;

	@media screen and (min-width: 768px) {
		padding-left: 24px;
		padding-right: 24px;
		max-width: 50%;
	}
`;

const Subheading = styled.p`
	text-align: center;
	line-height: 1.8;
	font-weight: 400;
	overflow-wrap: break-word;
	font-family: 'Old Standard TT', serif;
	letter-spacing: normal;

	@media screen and (min-width: 1280px) {
		font-size: 16px;
	}

	@media screen and (min-width: 1536px) {
		font-size: 18px;
	}
`;

const Heading = styled.h4`
	line-height: 1.25;
	max-width: 100%;
	font-size: 19px;
	font-weight: 700;
	font-family: 'Karla', sans-serif;
	letter-spacing: 2px;
	overflow-wrap: break-word;
	text-align: center;
	margin-bottom: 24px;

	@media screen and (min-width: 1536px) {
		font-size: 21px;
	}
`;

const Content = styled.div`
	max-width: 100%;
	padding-left: 12px;
	padding-right: 12px;
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		max-width: 50%;
	}
`;

const Image = styled.img`
	max-width: 100%;

	@media screen and (max-width: 767px) {
		height: calc((100vw - 48px) / 1.33);
	}
`;

const Container = styled.div`
	margin-right: auto;
	margin-left: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 100px;
	padding-bottom: 100px;
	flex-direction: column;
	padding-left: 12px;
	padding-right: 12px;

	@media screen and (min-width: 768px) {
		width: 100%;
		flex-direction: row;
	}

	@media screen and (min-width: 1024px) {
		width: 984px;
		padding-left: 56px;
		padding-right: 56px;
	}

	@media screen and (min-width: 1280px) {
		width: 1160px;
	}

	@media screen and (min-width: 1536px) {
		width: 1280px;
	}
`;
