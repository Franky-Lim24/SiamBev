import React from 'react';
import styled from 'styled-components';

const Border = () => {
	return <Hr />;
};

export default Border;

const Hr = styled.hr`
	border-style: solid;
	border-bottom-width: 1px;
	border-color: rgb(232, 234, 232);
	width: 100%;
	margin-bottom: 20px;
	opacity: 1 !important;
`;
