import * as React from 'react';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import Blogs from '../../components/newsletter/Blogs';

const IndexPage = () => {
	return (
		<main>
			<title>Newsletter</title>
			<Header></Header>
			<Blogs></Blogs>
			<Footer />
		</main>
	);
};

export default IndexPage;
