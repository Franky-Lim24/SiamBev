import React, { useState } from 'react';
import styled from 'styled-components';
import image from '../../images/banner3.png';
import FloatingLabelInput from 'react-floating-label-input';
import emailjs from 'emailjs-com';
import '../styles.scss';

const Subscribe = () => {
	const [email, setEmail] = useState('');
	const [emailErr, setEmailErr] = useState('');
	const [status, setStatus] = useState(true);
	const [disable, setDisable] = useState(false);

	const validateEmail = () => {
		const re = /^\S+@\S+$/;
		let result = re.test(String(email).toLowerCase());

		if (!result) {
			setEmailErr('Please enter a valid email address.');
		} else {
			setEmailErr('');
		}
		return result;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateEmail()) {
			setDisable(true);
			emailjs
				.sendForm(
					process.env.service_id,
					process.env.subscribe_id,
					e.target,
					process.env.user_id
				)
				.then(
					(result) => {
						console.log(result.text);
						setStatus(false);
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
	};
	return (
		<BannerContainer src={image}>
			<Text>Subscribe</Text>
			{status ? (
				<>
					<Subtitle>
						Sign up to hear from us about specials, sales, and events.
					</Subtitle>
					<form className="formContainer" onSubmit={handleSubmit}>
						<FormContainer>
							<InputContainer>
								<FloatingLabelInput
									id="email"
									className="subscribeInput"
									label="Email"
									onChange={(e) => {
										setEmail(e.target.value);
										validateEmail();
									}}
									name="email"
									value={email}
								/>
								{emailErr.length ? <Error>{emailErr}</Error> : null}
							</InputContainer>
							<Button disabled={disable} type="submit">
								Sign Up
							</Button>
						</FormContainer>
					</form>
				</>
			) : (
				<Subheading>
					Great, you are now subscribed to our mailing list!
				</Subheading>
			)}
		</BannerContainer>
	);
};

export default Subscribe;

const Subheading = styled.p`
	font-size: 16px;
	color: white;
	text-align: center;
	line-height: 1.5;
	font-weight: 400;
	overflow-wrap: break-word;
	font-family: 'Old Standard TT', serif;

	@media screen and (min-width: 1536px) {
		font-size: 18px;
	}
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const FormContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

const Subtitle = styled.p`
	font-size: 16px;
	color: white;
	line-height: 1.5;
	font-weight: 400;
	overflow-wrap: break-word;
	text-align: center;
	margin-bottom: 16px;
	font-family: 'Old Standard TT', serif;

	@media screen and(min-width: 1536px) {
		font-size: 18px;
	}
`;

const Error = styled.p`
	color: white;
	margin-top: 4px;
	line-height: 1.5;
	font-weight: 400;
	overflow-wrap: break-word;
	font-size: 16px;
	font-family: 'Old Standard TT', serif;

	@media screen and (min-width: 1536px) {
		font-size: 18px;
	}
`;

const Button = styled.button`
	font-size: 14px;
	width: 100%;
	margin-top: 20px;
	border: 2px solid white;
	background-color: transparent;
	border-radius: 48px;
	min-height: 56px;
	padding: 8px 40px 8px 40px;
	transition-timing-function: ease-in-out;
	transition-duration: 0.3s;
	transition-property: background-color;
	text-align: center;
	font-weight: 700;
	font-family: Karla, sans-serif;
	text-decoration: none;
	letter-spacing: 2px;
	color: white;

	&:hover {
		background-color: white;
		color: black;
	}

	@media screen and (min-width: 768px) {
		font-size: 16px;
		align-self: flex-start;
		width: 200px;
		margin-top: 0;
	}
`;

const BannerContainer = styled.div`
	width: 100%;
	padding-bottom: 72px;
	padding-top: 72px;
	min-height: 200px;
	padding-left: 24px;
	background-image: linear-gradient(
			rgba(0, 0, 0, 0.48) 0%,
			rgba(0, 0, 0, 0.48) 100%
		),
		url(${(props) => props.src});
	background-repeat: no-repeat;
	background-position: center;
	background-size: auto, cover;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-right: 24px;
	flex-direction: column;
`;

const Text = styled.p`
	color: white;
	line-height: 1.125;
	font-size: 33px;
	font-weight: 700;
	font-family: 'Karla', sans-serif;
	letter-spacing: 2px;
	margin: 0;
	margin-bottom: 32px;
	text-align: center;
	overflow-wrap: break-word;

	@media screen and (min-width: 1280px) {
		font-size: 39px;
	}

	@media screen and (min-width: 1536px) {
		font-size: 42px;
	}
`;
