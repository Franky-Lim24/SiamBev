import React from 'react';
import styled from 'styled-components';

const Subheading = ({ children }) => {
	return <Text>{children}</Text>;
};

export default Subheading;

const Text = styled.b`
	margin-bottom: 20px;
	font-size: 16px;
	word-break: break-word;
	line-height: 1.5;
	font-weight: 700;
	color: rgb(27, 27, 27);
	overflow-wrap: break-word;
	font-family: 'Old Standard TT', serif;
	@media screen and (min-width: 1536px) {
		font-size: 18px;
	}
`;
