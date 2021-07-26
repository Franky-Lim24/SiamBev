import React, { useState } from 'react';
import styled from 'styled-components';
import FloatingLabelInput from 'react-floating-label-input';
import emailjs from 'emailjs-com';
import Fade from 'react-reveal/Fade';

const Message = () => {
	const [status, setStatus] = useState(true);
	const [statusBtn, setStatusBtn] = useState('Send');
	const [name, setName] = useState('');
	const [nameErr, setNameErr] = useState('');
	const [email, setEmail] = useState('');
	const [emailErr, setEmailErr] = useState('');
	const [message, setMessage] = useState('');
	const [messageErr, setMessageErr] = useState('');
	const [disable, setDisable] = useState(false);

	const validateEmail = (email) => {
		const re = /^\S+@\S+$/;
		return re.test(String(email).toLowerCase());
	};

	const validateForm = () => {
		let checker = false;
		if (name.trim() === '') {
			setNameErr('Name is required!');
			checker = true;
		} else {
			setNameErr('');
		}
		if (email.replace(' ', '') === '') {
			setEmailErr('Email is required!');
			checker = true;
		} else if (!validateEmail(email)) {
			setEmailErr('Please enter a valid email address.');
			checker = true;
		} else {
			setEmailErr('');
		}
		if (message.replace(' ', '') === '') {
			setMessageErr('Message is required!');
			checker = true;
		} else {
			setMessageErr('');
		}
		return checker;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validateForm()) {
			setDisable(true);
			setStatusBtn('Sending');
			emailjs
				.sendForm(
					process.env.service_id,
					process.env.template_id,
					e.target,
					process.env.user_id
				)
				.then(
					(result) => {
						console.log(result.text);
						setStatusBtn('Sent');
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
	};
	return (
		<>
			{!status ? (
				<Dialog>
					<Fade>
						<Title>SiamBev</Title>
						<Chat>
							<Msg>
								Hi! Let us know how we can help and we’ll respond shortly.
							</Msg>
							<svg
								width="33px"
								height="16px"
								viewBox="0 0 33 16"
								xmlns="http://www.w3.org/2000/svg"
								className="svgDialog"
							>
								<path d="M0.342304 14.5C7.35025 6.3293 3.35025 0.829295 0 0.0.0 0.0 5.4 2.1 32.3502 0.329295C32.3503 3.8293 -3.13481 20.7261 0.342304 14.5Z"></path>
							</svg>
						</Chat>
						{statusBtn === 'Sent' ? (
							<FormContainer status="Sent">
								<svg
									viewBox="0 0 24 24"
									fill="currentColor"
									color="#0078d7"
									width="72"
									height="72"
								>
									<path
										fillRule="evenodd"
										d="M12 4a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm0 1.5A6.507 6.507 0 0 0 5.5 12c0 3.584 2.915 6.5 6.5 6.5 3.584 0 6.5-2.916 6.5-6.5S15.584 5.5 12 5.5zm3.316 4.249a.72.72 0 0 1 .195.533.719.719 0 0 1-.252.512l-4.099 3.491a.846.846 0 0 1-.56.209.845.845 0 0 1-.62-.268l-1.298-1.419a.723.723 0 0 1 .056-1.046.774.774 0 0 1 1.067.055l.845.931 3.6-3.053a.771.771 0 0 1 1.066.055z"
									></path>
								</svg>
								<Thanks>
									Thanks for the message. We'll get back to you as soon as we
									can.
								</Thanks>
							</FormContainer>
						) : (
							<form onSubmit={handleSubmit}>
								<FormContainer>
									<FloatingLabelInput
										className="floatingLab"
										id="name"
										label="Name"
										onChange={(e) => {
											setName(e.target.value);
											validateForm();
										}}
										name="name"
										value={name}
									/>
									{nameErr.length ? <Error>{nameErr}</Error> : null}
									<FloatingLabelInput
										className="floatingLab"
										id="email"
										label="Email"
										onChange={(e) => {
											setEmail(e.target.value);
											validateForm();
										}}
										name="email"
										value={email}
									/>
									{emailErr.length ? <Error>{emailErr}</Error> : null}
									<Textarea
										placeholder="How can we help?"
										cols="50"
										rows="6"
										onChange={(e) => {
											setMessage(e.target.value);
											validateForm();
										}}
										name="message"
										value={message}
									/>
									{messageErr.length ? <Error>{messageErr}</Error> : null}
									<Button disabled={disable} type="submit">
										{statusBtn}
									</Button>
									<ReCaptcha>
										This site is protected by reCAPTCHA and the Google Privacy
										Policy and Terms of Service apply.
									</ReCaptcha>
								</FormContainer>
							</form>
						)}
					</Fade>
				</Dialog>
			) : null}
			<Container onClick={() => setStatus(!status)} bg={status}>
				{status ? (
					<svg viewBox="0 0 24 24" fill="currentColor" width="44" height="44">
						<g fill="currentColor">
							<rect x="4" y="6" width="16" height="10.222" rx="1.129"></rect>
							<path d="M8.977 18.578l.2-2.722a.564.564 0 01.564-.523h3.61c.548 0 .774.705.327 1.024l-3.81 2.721a.564.564 0 01-.89-.5z"></path>
						</g>
					</svg>
				) : (
					<svg viewBox="0 0 24 24" fill="white" width="34" height="34">
						<path
							fillRule="evenodd"
							d="M19.219 5.22a.75.75 0 0 0-1.061 0l-5.939 5.939-5.939-5.94a.75.75 0 1 0-1.061 1.062l5.939 5.939-5.939 5.939a.752.752 0 0 0 0 1.06.752.752 0 0 0 1.061 0l5.939-5.938 5.939 5.939a.75.75 0 1 0 1.061-1.061l-5.939-5.94 5.939-5.938a.75.75 0 0 0 0-1.061"
						></path>
					</svg>
				)}
			</Container>
		</>
	);
};

export default Message;

const Thanks = styled.p`
	font-size: 16px;
	color: rgb(122, 118, 110);
	line-height: 1.5;
	font-weight: 400;
	overflow-wrap: break-word;
	font-family: 'Old Standard TT', serif;
	text-align: center;

	@media screen and (min-width: 1536px) {
		font-size: 18px;
	}
`;

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin-top: -35px;
	padding: ${(props) =>
		props.status === 'Sent' ? '100px 40px 100px 40px' : '0 24px 0 24px'};
`;

const Msg = styled.p`
	padding-left: 15px;
	padding-bottom: 12px;
	padding-right: 15px;
	padding-top: 12px;
	color: rgb(48, 48, 48);
	font-size: 16px;
	background-color: rgba(236, 233, 228, 0.3);
	border-radius: 5px;
	line-height: 1.5;
	font-weight: 400;
	margin-bottom: 0px;
	margin-top: 0px;
	overflow-wrap: break-word;
	font-family: 'Old Standard TT', serif;
`;

const Chat = styled.div`
	margin-left: 24px;
	margin-right: 24px;
	margin-top: -24px;
	border-radius: 5px;
	margin-bottom: 24px;
	background-color: rgb(255, 255, 255);
`;

const Title = styled.h4`
	font-size: 22px;
	padding-bottom: 40px;
	padding-top: 16px;
	font-weight: 400;
	margin-right: 0px;
	margin-left: 0px;
	line-height: 1.25;
	padding-right: 24px;
	padding-left: 24px;
	margin-bottom: 0px;
	margin-top: 0px;
	letter-spacing: 2px;
	color: rgb(28, 27, 27);
	background-color: rgb(230, 226, 219);
	font-family: 'Old Standard TT', serif;

	@media screen and (min-width: 1536px) {
		font-size: 24px;
	}
`;

const Dialog = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 382px;
	border-radius: 5px;
	border-color: rgb(255, 255, 255);
	overflow-y: auto;
	border: 1px;
	max-height: calc(100vh - 105px);
	overflow-x: hidden;
	margin-bottom: 16px;
	background-color: rgb(255, 255, 255);
	position: fixed;
	border-style: solid;
	box-shadow: rgb(0 0 0 / 25%) 0px 3px 18px;
	right: 24px;
	bottom: 90px;
	border-color: white;
`;

const Container = styled.div`
	box-shadow: rgb(0 0 0 / 25%) 0px 3px 18px;
	background-color: ${(props) =>
		props.bg ? 'rgb(230, 226, 219)' : 'rgb(85, 85, 85)'};
	border-radius: 50%;
	width: 65px;
	height: 65px;
	z-index: 9999;
	bottom: 24px;
	right: 24px;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const Error = styled.p`
	color: rgb(239, 0, 0);
	margin-top: 4px;
	line-height: 1.5;
	font-weight: 400;
	overflow-wrap: break-word;
	font-size: 16px;
	font-family: 'Old Standard TT', serif;
	align-self: flex-start;
`;

const ReCaptcha = styled.p`
	font-size: 12px;
	color: rgb(145, 145, 145);
	line-height: 1.5;
	font-weight: 400;
	margin: 0;
	font-family: 'Old Standard TT', serif;
	text-align: center;
	margin-top: 20px;
	margin-bottom: 20px;
	@media screen and (min-width: 1536px) {
		font-size: 14px;
	}
`;

const Button = styled.button`
	font-size: 14px;
	border: 2px solid black;
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
	max-width: ${(props) => props.w};
	margin-top: 20px;

	&:hover {
		background-color: black;
		color: white;
	}

	@media screen and (min-width: 768px) {
		font-size: 16px;
	}
`;

const Textarea = styled.textarea`
	border: 0 solid black;
	border-bottom-width: 1px;
	font-size: 18px;
	color: black;
	font-family: 'Old Standard TT', serif;
	margin-top: 20px;
	padding-left: 10px;
	max-width: 100%;
	&:hover {
		background-color: #eee;
	}
	&:focus {
		outline: none;
	}
	&::placeholder {
		color: black;
		font-family: 'Old Standard TT', serif;
		font-size: 18px;
		font-weight: 400;
	}
`;
