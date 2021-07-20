import React from 'react';
import main from '../../images/main.webp';
import styled from 'styled-components';

const Landing = () => {
	return (
		<Row>
			<Content>
				<Heading>SiamBev</Heading>
				<Subheading>
					a wholesale spirits distributor who believes that each bottle deserves
					a signature taste to be remembered by
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
	max-width: 100%;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	width: 45%;
	margin-left: 9%;
	margin-right: 6.5%;
`;

const Heading = styled.h1`
	font-size: 56px;
	letter-spacing: 4px;
	line-height: 1.2;
	font-weight: 700;
	color: black;
	font-family: 'Karla', sans-serif;
`;

const Subheading = styled.p`
	font-size: 21px;
	font-family: 'Old Standard TT', serif;
	line-height: 1.5;
	letter-spacing: 2px;
	margin-right: 10px;
`;

const ImageContainer = styled.div`
	max-width: 55%;
`;

const Image = styled.img`
	max-width: 79%;
`;
