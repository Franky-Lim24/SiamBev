import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<Container>
			<Text>Copyright © 2021 SiamBev - All Rights Reserved.</Text>
		</Container>
	);
};

export default Footer;

const Container = styled.div`
	width: 100%;
	padding-bottom: 56px;
	padding-top: 56px;
`;

const Text = styled.p`
	font-size: 14px;
	font-weight: 400;
	line-height: 1.5;
	color: rgb(27, 27, 27);
	overflow-wrap: break-word;
	font-family: 'Old Standard TT', serif;
	margin: 0;
	width: 100%;
	text-align: center;

	@media screen and (min-width: 1024px) {
		text-align: left;
		padding-left: 56px;
	}

	@media screen and (min-width: 1536px) {
		font-size: 16px;
	}
`;
