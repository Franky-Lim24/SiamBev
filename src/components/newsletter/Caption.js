import React from 'react';
import styled from 'styled-components';

const Caption = ({ children }) => {
	return <Figcaption>{children}</Figcaption>;
};

export default Caption;

const Figcaption = styled.figcaption`
	font-size: 14px;
	color: rgb(21, 21, 21);
	padding-right: 8px;
	padding-left: 8px;
	padding-bottom: 4px;
	padding-top: 4px;
	background-color: rgb(246, 246, 246);
	line-height: 1.5;
	font-weight: 400;
	font-family: 'Old Standard TT', serif;
	margin-top: -24px;
	text-align: center;
	margin-bottom: 24px;

	@media screen and (min-width: 1536px) {
		font-size: 16px;
	}
`;
