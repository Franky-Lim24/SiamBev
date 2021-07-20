import * as React from 'react';
import Header from '../components/header';
import Landing from '../components/main/Landing';

const IndexPage = () => {
	return (
		<main>
			<title>SiamBev</title>
			<Header></Header>
			<div>
				<Landing></Landing>
			</div>
		</main>
	);
};

export default IndexPage;
