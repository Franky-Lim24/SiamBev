import 'bootstrap/dist/css/bootstrap.min.css';
import './src/components/styles.scss';
import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export const wrapRootElement = ({ element }) => {
	return (
		<GoogleReCaptchaProvider
			reCaptchaKey={process.env.recaptcha_id}
			useEnterprise={true}
		>
			{element}
		</GoogleReCaptchaProvider>
	);
};
