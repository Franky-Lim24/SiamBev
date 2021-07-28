import React from 'react';
import styled from 'styled-components';

const Title = ({ children }) => {
	return <Heading>{children}</Heading>;
};

export default Title;

const Heading = styled.h3`
	font-size: 28px;
	font-weight: 400;
	margin-bottom: 8px;
	line-height: 1.125;
	color: rgb(27, 27, 27);
	overflow-wrap: break-word;
	letter-spacing: 2px;
	font-family: 'Old Standard TT', serif;
	@media screen and (min-width: 768px) {
		font-size: 30px;
	}
	@media screen and (min-width: 1280px) {
		font-size: 32px;
	}

	@media screen and (min-width: 1536px) {
		font-size: 36px;
	}
`;
