import React from 'react';
import styled from 'styled-components';

const History = () => {
	return (
		<Container>
			<Content>
				<Heading>A taste of history</Heading>
				<Subheading>
					<span>
						Long Feng Baijiu is distilled from a traditional method that
						requires a minimum of 5 years, inclusive of a year of brewing and
						four years of storage. Due to its time-intensive nature, Long Feng
						Baijiu belongs to the 2% of premium Baijiu that undergo traditional
						distillation processes. Symbolically, every bottle of LongFeng
						Baijiu is imbued with a meaning of eternal bliss and tranquility, as
						illustrated by the phoenix and dragon.
					</span>
				</Subheading>
			</Content>
		</Container>
	);
};

export default History;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-item: center;
	width: 100%;
	padding-right: 24px;
	padding-left: 24px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 50px;
	margin-bottom: 100px;
	@media screen and (min-width: 1024px) {
		width: 984px;
	}
	@media screen and (min-width: 1280px) {
		width: 1160px;
	}
	@media screen and (min-width: 1536px) {
		width: 1280px;
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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 50px;

	@media screen and (min-width: 768px) {
		max-width: 50%;
		padding-right: 28px;
		padding-left: 28px;
	}
`;
