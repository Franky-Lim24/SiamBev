import React from 'react';
import styled from 'styled-components';

const Paragraph = ({ children }) => {
	return <Text>{children}</Text>;
};

export default Paragraph;

const Text = styled.p`
	margin-bottom: 20px;
	font-size: 16px;
	word-break: break-word;
	line-height: 1.5;
	font-weight: 400;
	color: rgb(27, 27, 27);
	overflow-wrap: break-word;
	font-family: 'Old Standard TT', serif;

	@media screen and (min-width: 1536px) {
		font-size: 18px;
	}
`;
