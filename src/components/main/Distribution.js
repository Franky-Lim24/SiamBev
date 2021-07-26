import React from 'react';
import styled from 'styled-components';
import img from '../../images/distribution.webp';
import Fade from 'react-reveal/Fade';
import withReveal from 'react-reveal/withReveal';
import Zoom from 'react-reveal/Zoom';

const Distribution = () => {
	return (
		<Container>
			<ImageContainer>
				<Image src={img} alt="distribution" />
			</ImageContainer>
			<Content>
				<Heading>Distribution of Distilled Spirits</Heading>
				<Subheading>
					<span>
						At SiamBev, we serve the global community by introducing a diverse
						range of distilled spirits. We produce an assortment of
						international spirits, which commonly includes
						<strong> Whisky, Vodka & Gin,</strong>
					</span>
				</Subheading>
				<Break>
					<span> </span>
				</Break>
				<Subheading>
					<span>
						Apart from meeting the demands of homegrown liquor establishments,
						SiamBev exports worldwide and produces cultural-specific spirits. We
						work with traditional distilleries to produce Chinese
						<strong> Baijiu,</strong> a liquor imbued with both traditional &
						symbolic omens, and plays a significant role throughout Chinese
						history.
					</span>
				</Subheading>
				<Break>
					<span> </span>
				</Break>
				<Subheading>
					<span>
						Furthermore, we believe that through a common appreciation for
						spirits, nations can foster greater understanding amongst
						contrasting cultures, and build healthier business relations in the
						years to come.
					</span>
				</Subheading>
			</Content>
		</Container>
	);
};

export default Distribution;

const Break = styled.p`
	line-height: 1.8;
`;

const ImageContainer = styled.div`
	max-width: 100%;
	flex-basis: 50%;
	padding-right: 12px;
	padding-left: 12px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 768px) {
		padding-left: 24px;
		padding-right: 24px;
		max-width: 50%;
	}
`;

const Subheading = withReveal(
	styled.p`
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
	`,
	<Fade right />
);

const Heading = withReveal(
	styled.h4`
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
	`,
	<Fade right />
);

const Content = styled.div`
	max-width: 100%;
	padding-left: 12px;
	padding-right: 12px;
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		max-width: 50%;
	}
	@media screen and (orientation: portrait) {
		margin-top: 100px;
	}
`;

const Image = withReveal(
	styled.img`
		max-width: 100%;

		@media screen and (max-width: 767px) {
			height: calc((100vw - 48px) / 1.33);
		}
	`,
	<Zoom />
);

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
	margin-top: 100px;

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
