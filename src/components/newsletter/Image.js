import React from 'react';
import styled from 'styled-components';

const Image = ({ src, alt }) => {
	return <Img src={src} alt={alt} />;
};

export default Image;

const Img = styled.img`
	width: 100%;
	margin-bottom: 24px;
`;
