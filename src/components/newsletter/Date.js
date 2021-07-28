import React from 'react';
import styled from 'styled-components';

const Date = ({ children }) => {
	return <Text>{children}</Text>;
};

export default Date;

const Text = styled.p`
	margin-bottom: 32px;
	font-family: 'Old Standard TT', serif;
	line-height: 1.5;
	font-weight: 400;
	color: rgb(27, 27, 27);
	font-size: 14px;
	margin-bottom: 32px;
	@media screen and (min-width: 1536px) {
		font-size: 16px;
	}
`;
