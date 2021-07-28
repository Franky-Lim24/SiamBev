import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Break from './Break';
import { news } from '../data/news';

const Blog = ({ url, children }) => {
	console.log(url);
	return (
		<Container>
			<ContentContainer>
				<Content>
					<Back to="/newsletter">
						<svg
							viewBox="0 0 24 24"
							fill="currentColor"
							width="1em"
							height="1em"
						>
							<path
								fillRule="evenodd"
								d="M15.804 19.544a.774.774 0 0 1-1.061-.03L7 11.63l7.742-7.42a.773.773 0 0 1 1.061 0 .697.697 0 0 1 0 1.017L9.09 11.66l6.745 6.867a.698.698 0 0 1-.031 1.016"
							></path>
						</svg>
						<span>All Posts</span>
					</Back>
					<Break />
					{children}
				</Content>
				<Recent>
					<Title>Recent Posts</Title>
					<NavContainer>
						{news
							.filter((item) => item.url !== url)
							.map((item) => {
								return (
									<NavLink to={item.url} key={item.title}>
										<BlogContainer>
											<ImageContainer>
												<Image src={item.src} alt={item.title} />
											</ImageContainer>
											<DescriptionContainer>
												<Subtitle>{item.title}</Subtitle>
												<Date>{item.date}</Date>
											</DescriptionContainer>
										</BlogContainer>
									</NavLink>
								);
							})}
					</NavContainer>
				</Recent>
			</ContentContainer>
		</Container>
	);
};

export default Blog;

const NavLink = styled(Link)`
	text-decoration: none;
`;

const NavContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Date = styled.p`
	font-size: 14px;
	margin-top: 16px;
	line-height: 1.5;
	font-weight: 400;
	color: rgb(27, 27, 27);
	overflow-wrap: break-word;
	font-family: 'Old Standard TT', serif;
	text-decoration: none;

	@media screen and (min-width: 1536px) {
		font-size: 16px;
	}
`;

const Subtitle = styled.p`
	font-size: 16px;
	line-height: 1.5;
	font-weight: 400;
	color: rgb(27, 27, 27);
	font-family: 'Old Standard TT', serif;
	@media screen and (min-width: 1024px) {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	@media screen and (min-width: 1536px) {
		font-size: 18px;
	}
`;

const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
`;

const Image = styled.img`
	width: 110px;
	max-width: 100%;
	height: 110px;
	object-fit: cover;
`;

const ImageContainer = styled.div`
	max-width: 40%;
	margin-right: 16px;
`;

const BlogContainer = styled.div`
	margin-bottom: 24px;
	margin-top: 24px;
	display: flex;
`;

const Title = styled.h4`
	font-size: 22px;
	margin-bottom: 24px;
	line-height: 1.25;
	font-weight: 400;
	color: rgb(27, 27, 27);
	letter-spacing: 2px;
	width: 100%;
	font-family: 'Old Standard TT', serif;
	@media screen (min-width: 1536px) {
		font-size: 24px;
	}
`;

const Recent = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	@media screen and (min-width: 1024px) {
		padding-right: 40px;
		width: 33.33%;
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	@media screen and (min-width: 1024px) {
		margin-right: 32px;
		width: 66.67%;
		border-right: 1px solid rgb(232, 234, 232);
		padding-right: 40px;
		padding-left: 40px;
		margin-bottom: 16px;
	}
`;

const ContentContainer = styled.div`
	padding: 40px 24px 40px 24px;
	background-color: rgb(255, 255, 255);
	opacity: 0.95;
	width: 90%;
	padding-right: 24px;
	padding-left: 24px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	@media screen and (min-width: 1024px) {
		width: 984px;
		margin-top: 40px;
		margin-bottom: 40px;
		padding-right: 56px;
		padding-left: 56px;
		flex-direction: row;
	}
	@media screen and (min-width: 1280px) {
		width: 1160px;
	}
	@media screen and (min-width: 1536px) {
		width: 1280px;
	}
`;

const Container = styled.div`
	background-color: rgb(22, 22, 22);
	width: 100%;
	padding: 40px 56px 40px 56px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Back = styled(Link)`
	font-size: 16px;
	font-family: 'Old Standard TT', serif;
	text-transform: none;
	font-weight: 400;
	color: rgb(122, 118, 110);
	cursor: pointer;
	text-decoration: none;
	margin-bottom: 40px;
	&:hover {
		color: black;
	}

	@media screen and (min-width: 1536px) {
		font-size: 18px;
	}
`;
