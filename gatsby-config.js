module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
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
	],
};
