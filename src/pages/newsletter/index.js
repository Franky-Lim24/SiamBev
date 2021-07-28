import * as React from 'react';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import Blogs from '../../components/newsletter/Blogs';
import Message from '../../components/main/Message';

const IndexPage = () => {
	return (
		<main>
			<title>Newsletter</title>
			<Header></Header>
			<Blogs></Blogs>
			<Footer />
			<Message />
		</main>
	);
};

export default IndexPage;
