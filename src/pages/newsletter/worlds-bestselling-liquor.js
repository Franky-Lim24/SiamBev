import React from 'react';
import Footer from '../../components/shared/Footer';
import Header from '../../components/shared/Header';
import Blog from '../../components/newsletter/Blog';
import Title from '../../components/newsletter/Title';
import Date from '../../components/newsletter/Date';
import Paragraph from '../../components/newsletter/Paragraph';
import Image from '../../components/newsletter/Image';
import Border from '../../components/newsletter/Border';
import img1 from '../../images/blog2.webp';
import img2 from '../../images/blog4.webp';
import img3 from '../../images/blog5.webp';
import Subheading from '../../components/newsletter/Subheading';
import Caption from '../../components/newsletter/Caption';
import Break from '../../components/newsletter/Break';

const News = () => {
	return (
		<>
			<Header />
			<Blog url="/newsletter/worlds-bestselling-liquor">
				<Title>World's Bestselling Liquor that you've never tried </Title>
				<Date>10 June 2021</Date>
				<Subheading>"Are you a whisky or Vodka person?”</Subheading>
				<Paragraph>
					You have probably came across this phrase at some point in your life,
					and might have always thought that one of these liquors are bound to
					be the world’s bestselling liquor. Would you believe there exists an
					extraordinary liquor that constitutes more than two-thirds of all
					spirits production globally? And what's more, most of you have never
					tasted it.
				</Paragraph>
				<Image src={img1} alt="img1" />
				<Caption>Photo Courtesy of Derek Sandhaus</Caption>
				<Paragraph>
					Baijiu might be the last thing that comes to mind. With over 14
					billion litres produced annually, Baijiu substantially outperforms the
					combined market for whiskey, vodka, gin, rum and tequila. The two
					largest Baijiu distillers across China, namely Kweichow Moutai and
					Wuliangye have further amassed an astounding valuation of £375 billion
					combined. That is more than a fifth of Apple’s Market Capitalization
					as of 2021.
				</Paragraph>
				<Border />
				<Subheading>Made in China</Subheading>
				<Paragraph>
					Just as we associate Vodka with Russian and Polish origins through its
					Slavic roots (diminutive of “Voda”, or Water), Baijiu (白酒) is
					identified through a similar linguistical manner. Ritualized as a way
					of life, Baijiu is deeply embedded in Chinese culture and customs. In
					China, a heightened tolerance for alcohol often garners greater
					respect and confers “face” across many occasions.
				</Paragraph>
				<Image src={img2} alt="img2" />
				<Caption>
					President Richard Nixon & Premier Zhou Enlai toast the opening of
					U.S.-China relations, February 1972 (Credit: Richard Nixon
					Presidential Library and Museum)
				</Caption>
				<Paragraph>
					For instance, Chinese business culture believes that one's true colour
					is revealed when intoxicated. It has hence, became a corporate
					tradition to serve high-grade Baijiu at business banquets to assess
					one's trustworthiness. While declining a toast is widely frowned upon,
					toasting is a reciprocal relationship where a recipient of a toast is
					expected to return the gesture with another toast. Be mentally
					prepared to consume twice the amount of Baijiu.
				</Paragraph>
				<Paragraph>
					Despite its obscurity beyond China, Baijiu is slowly gaining ground.
					There is the Baijiu Cocktail Week in London Chinatown, while the
					immense love for Baijiu has propelled a Canadian to kickstart World
					Baijiu Day. Baijiu adaptations are rapidly sprouting as well, through
					the likes of ByeJoe (United States), Taizi (New Zealand) and Dragon’s
					Mist (Canada). Pop by to your nearest Chinatown and immerse yourself
					in this vibrant atmosphere. While you're at it, why not have a shot at
					Baijiu (pun intended).
				</Paragraph>
				<Image src={img3} alt="img3" />
				<Caption>Chinatown in New York, United States</Caption>
				<Subheading>Six Common Mistakes while Drinking Baijiu</Subheading>
				<Subheading>1. Asking for ice or chilled Baijiu.</Subheading>
				<Paragraph>
					Baijiu is usually served neat at room temperature. We've never come
					across Baijiu on the rocks, but do leave us a comment if you've
					experimented with different temperatures.
				</Paragraph>
				<Subheading>2. Toasting with one hand.</Subheading>
				<Paragraph>
					As small as the shot glasses are, do make an effort to toast and drink
					Baijiu with both hands. This demonstrates respect and courtesy,
					regardless of it being a business or informal setting.
				</Paragraph>
				<Subheading>
					3. Toasting with tea and other non-alcoholic beverages.
				</Subheading>
				<Paragraph>
					In Chinese banquets, there are different cups to recognize. The
					ceramic teacups (Gaiwan), beer pints, wine glasses and diminutive shot
					glasses for Baijiu. Mimicking your host would be the safest option.
				</Paragraph>
				<Subheading>4. "Gan Bei".</Subheading>
				<Paragraph>
					Though it is customary to say "Cheers" or "Gan Bei", "Gan Bei"
					translates to "drying the cup", or emptying the entire shot. Too many
					consecutive shots of Baijiu and a hangover awaits!
				</Paragraph>
				<Subheading>5. Clinking the glasses.</Subheading>
				<Paragraph>
					You might be wondering what's wrong with clinking glasses, but it is
					associated with "Gan Bei" as well! Another mistake is when you
					position the rim of your shot glass above the other person's shot
					glass, an act that is associated with disrespect and is widely frowned
					upon
				</Paragraph>
				<Subheading>6. Filling your glass as a guest.</Subheading>
				<Paragraph>
					It might be unheard of, but it reflects badly on the hospitality
					provided by your host. Allow your host to fill the glass, and when
					they have done so, tap one finger on the table to express your
					gratitude. If you ever have the opportunity to host, an important note
					is to fill the glasses above 90%, as it reflects your generosity and
					goodwill. A bit of overfill and spillage is okay!
				</Paragraph>
				<Break /> <Break /> <Break />
				<Paragraph>
					<b>Useful side note:</b> For tea, do not fill the cup above 70% full.
					It might be unheard of in Western culture, but to fill a cup of
					Chinese tea to the brim implicitly suggests bad faith and desire for
					your esteemed guests to leave. This can be detrimental to business
					dealings.
				</Paragraph>
				<Paragraph>
					Have any other drinking taboos in your everyday lives?
				</Paragraph>
				<Paragraph>Write in and share with us!</Paragraph>
			</Blog>
			<Footer />
		</>
	);
};

export default News;
