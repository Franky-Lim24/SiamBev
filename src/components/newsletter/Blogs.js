import React, { useState } from 'react';
import styled from 'styled-components';
import { news } from '../data/news';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import withReveal from 'react-reveal/withReveal';

const Blogs = () => {
	return (
		<Container>
			{news.map((item, index) => {
				return (
					<Item key={item.title}>
						<Blog>
							<ImgContainer>
								<Img src={item.src} alt={item.title} />
							</ImgContainer>
							<Content>
								<Date>{item.date}</Date>
								<Title>{item.title}</Title>
								<Description>{item.paragraph}</Description>
								<NavLink to={item.url}>Continue Reading</NavLink>
							</Content>
						</Blog>
						{index !== news.length - 1 ? <Hr /> : null}
					</Item>
				);
			})}
		</Container>
	);
};

export default Blogs;

const Item = styled.div`
	display: flex;
	justify-content: center;
	align-self: center;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		width: 100%;
	}
`;

const Hr = styled.hr`
	width: 60%;
	color: white;
	align-self: center;
`;

const Img = styled.img`
	width: 200px;
`;

const NavLink = styled(Link)`
	color: rgb(236, 233, 228);
	font-family: 'Old Standard TT', serif;
	font-size: 16px;
	@media screen and (min-width: 1536px) {
		font-size: 18px;
	}
`;

const Description = styled.p`
	font-size: 16px;
	line-height: 1.5;
	font-weight: 400;
	color: rgb(247, 247, 247);
	margin-bottom: 16px;
	overflow-wrap: break-word;
	font-family: 'Old Standard TT', serif;

	@media screen and (min-width: 1536px) {
		font-size: 18px;
	}
`;

const Title = styled.h4`
	font-size: 22px;
	line-height: 1.125;
	font-weight: 400;
	color: rgb(247, 247, 247);
	margin-bottom: 16px;
	overflow-wrap: break-word;
	letter-spacing: 2px;
	font-family: 'Old Standard TT', serif;

	@media screen and (min-width: 1536px) {
		font-size: 24px;
	}
`;

const Date = styled.p`
	font-size: 14px;
	color: rgb(247, 247, 247);
	font-family: 'Old Standard TT', serif;

	@media screen and (min-width: 1536px) {
		font-size: 16px;
	}
`;

const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-left: 40px;
	padding: 0 20px 0 20px;
	@media screen and (min-width: 768px) {
		width: 70%;
		padding: 0;
	}
	@media screen and (min-width: 1024px) {
		width: 50%;
		padding: 0;
	}
`;

const ImgContainer = styled.div`
	margin-bottom: 100px;
	@media screen and (min-width: 768px) {
		align-self: flex-start;
	}
`;

const Blog = withReveal(
	styled.div`
		width: 100%;
		padding-right: 24px;
		padding-left: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
		margin-bottom: 50px;
		flex-direction: column;

		@media screen and (min-width: 768px) {
			flex-direction: row;
		}
		@media screen and (min-width: 1024px) {
			padding-right: 56px;
			padding-left: 56px;
			width: 984px;
		}
		@media screen and (min-width: 1280px) {
			width: 1160px;
		}
		@media screen and (min-width: 1536px) {
			width: 1280px;
		}
	`,
	<Fade left />
);

const Container = styled.div`
	background-color: rgb(22, 22, 22);
	width: 100%;
	padding: 100px 0 100px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
