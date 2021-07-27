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
		{
			resolve: `gatsby-plugin-gatsby-cloud`,
		},
		{
			resolve: `gatsby-plugin-env-variables`,
			options: {
				allowList: [
					'recaptcha_id',
					'service_id',
					'subscribe_id',
					'template_id',
					'user_id',
				],
			},
		},
	],
};
