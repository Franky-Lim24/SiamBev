import React from 'react';
import Footer from '../../components/shared/Footer';
import Header from '../../components/shared/Header';
import Blog from '../../components/newsletter/Blog';
import Title from '../../components/newsletter/Title';
import Date from '../../components/newsletter/Date';
import Paragraph from '../../components/newsletter/Paragraph';
import Image from '../../components/newsletter/Image';
import Border from '../../components/newsletter/Border';
import img1 from '../../images/blog1.webp';
import img2 from '../../images/blog3.webp';
import Subheading from '../../components/newsletter/Subheading';

const News = () => {
	return (
		<>
			<Header />
			<Blog url="/newsletter/partnership-with-china-liquor-limited">
				<Title>
					SiamBev forms strategic partnership with China Liquor Limited
				</Title>
				<Date>12 July 2021</Date>
				<Paragraph>
					SiamBev Pte Ltd. (UEN: 202114790M) is happy to announce our successful
					partnership with China Liquor Limited (UEN: 201322134Z), alongside CHN
					Fortune Spirit Sdn. Bhd. (registration no. : 20181029994 (1292020-H).
				</Paragraph>
				<Image src={img1} alt="img1" />
				<Paragraph>
					This partnership is aligned with SiamBev’s long term product strategy:
					to establish Long Feng Baijiu’s brand presence across Southeast Asia.
					In terms of market penetration, SiamBev practices a two-tiered
					approach that aims to nurture a community of connoisseurs and Baijiu
					collectors alike. Ultimately, this facilitates acceptance for Baijiu
					in these new geographical markets, and embed Baijiu as a lifestyle
					product across the region.
				</Paragraph>
				<Paragraph>
					As a key financial hub of Asia, Singapore serves as an effective
					testbed for Baijiu. Many Chinese businessmen have anchored themselves
					in Singapore due to our world-class healthcare system, which gives
					rise to opportunities to collaborate and do business with the Chinese.
					As unconventional as it may sound, business drinking that utilizes
					Baijiu continues to bear great significance amongst Chinese business
					etiquettes. Such opportunities are further accentuated by the Regional
					Comprehensive Economic Partnership (RCEP) between China and regional
					ASEAN markets.
				</Paragraph>
				<Image src={img2} alt="img2" />
				<Paragraph>
					Our collaboration further signifies the goodwill between our
					neighboring countries, as we aim to foster stronger ties and leverage
					our regional network. As an original design and equipment
					manufacturer, SiamBev can achieve better synergy in our supply chain
					operations through knowledge exchange between our partners. The
					strategic alliance further allows the sharing of best practices and
					resources, alongside localized expertise in different geographical
					segments. Retrospectively, we hope that SiamBev can cater to the needs
					of our customers across Southeast Asia,
					<b> serving them a signature taste to be remembered by.</b>
				</Paragraph>
				<Border />
				<Subheading>About China Liquor Limited</Subheading>
				<Paragraph>
					China Liquor Limited is a Singapore incorporated company based on the
					extensive research and development of wine products, alongside the
					integration of the wine industry chain as the driving chain. Through
					its mission of “innovating and promoting” the upgrade of the wine
					industry’s largest market, China Liquor Limited actively promotes a
					diversified economy, cultural exchanges, as well as capital
					appreciation. At present, more than 2,000 tons of high-quality old
					wine and seasoning wine have been cellared, while another 4 million
					tons of liquor aged above 30 years have been continuously matured with
					a sustainable development plan.
				</Paragraph>
				<Subheading>About CHN Fortune Spirit Sdn. Bhd</Subheading>
				<Paragraph>
					CHN Fortune Spirit Sdn. Bhd is a Malaysian incorporated offshore asset
					management company. It invests in the storage hub for distilled spirit
					as the core asset of the company, located in the Chinese Liquor
					“Golden Triangle” area in Mainland China. CHN Fortune Spirit Sdn. Bhd
					aims to build 6,000 operating hubs globally, and expand their business
					towards Asia-Pacific and beyond in time to come.
				</Paragraph>
				<Subheading>About SiamBev Pte Ltd.</Subheading>
				<Paragraph>
					At SiamBev, we believe in providing our stakeholders with a better
					life, be it work or leisure. In order to facilitate a premium
					experience, we provide a myriad of alcohol selections through
					wholesale and retail distribution, amalgamated with our exclusive
					information technology. Characterized by the high work ethic at our
					core, accompanied by an undying passion to provide our esteemed
					customers with nothing but the best, SiamBev aims to be a leading
					Foodtech company on the global platform. One of our core businesses
					includes the creation of OEMs such as vodka and whiskey-based alcohol
					with minor specifications, as well as ODMs - bringing customization to
					the next level
				</Paragraph>
			</Blog>
			<Footer />
		</>
	);
};

export default News;
