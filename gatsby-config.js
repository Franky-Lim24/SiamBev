if (process.env.STAGING) {
	require('dotenv').config({
		path: `.env.${process.env.NODE_ENV}.staging`,
	});
} else {
	require('dotenv').config({
		path: `.env.${process.env.NODE_ENV}`,
	});
}
module.exports = {
	siteMetadata: {
		siteUrl: 'https://siambev.gatsbyjs.io/',
		title: 'SiamBev',
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-gatsby-cloud',
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Karla:300,400,500,600,700`],
				display: 'swap',
			},
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				ssr: true,
			},
		},
	],
};
