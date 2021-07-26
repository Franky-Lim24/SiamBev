import React, { useState } from 'react';
import styled from 'styled-components';
import img from '../../images/contact.png';
import FloatingLabelInput from 'react-floating-label-input';
import emailjs from 'emailjs-com';

const Contact = () => {
	const [contact, setContact] = useState(false);
	const [name, setName] = useState('');
	const [nameErr, setNameErr] = useState('');
	const [email, setEmail] = useState('');
	const [emailErr, setEmailErr] = useState('');
	const [message, setMessage] = useState('');
	const [messageErr, setMessageErr] = useState('');
	const [status, setStatus] = useState('Send');
	const [disable, setDisable] = useState(false);

	const sendMessage = (event) => {
		event.preventDefault();
		if (!validateForm()) {
			setStatus('Sending');
			setDisable(true);
			emailjs
				.sendForm(
					process.env.service_id,
					process.env.template_id,
					event.target,
					process.env.user_id
				)
				.then(
					(result) => {
						console.log(result.text);
						setStatus('done');
					},
					(error) => {
						console.log(error.text);
						setStatus('Send');
					}
				);
		}
	};

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
	return (
		<Container>
			<Content>
				{!contact ? (
					<ContactContent>
						<Heading>Better yet, see us in person!</Heading>
						<Subheading>
							<span>We love our customers, so feel free to visit us!</span>
						</Subheading>
						<Break>
							<span> </span>
						</Break>
						<Heading>SiamBev</Heading>
						<Subheading>
							<span>18 Howard Road #08-07 Novelty Bizcentre (S) 369585</span>
						</Subheading>
						<Break>
							<span> </span>
						</Break>
						<Heading>sales@sbev.asia</Heading>
						<Subheading>
							<span> by appointment and reservation basis</span>
						</Subheading>
						<Break>
							<span> </span>
						</Break>
						<Button w="250px" onClick={() => setContact(true)}>
							Drop us a line!
						</Button>
					</ContactContent>
				) : status !== 'done' ? (
					<ContactContent>
						<Heading>Drop us a line!</Heading>
						<form onSubmit={sendMessage}>
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
								placeholder="Message"
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
							<ReCaptcha>
								This site is protected by reCAPTCHA and the Google Privacy
								Policy and Terms of Service apply.
							</ReCaptcha>
							<ButtonGroup>
								<Button disabled={disable} type="submit">
									{status}
								</Button>
								<Span onClick={() => setContact(false)}>Cancel</Span>
							</ButtonGroup>
						</form>
					</ContactContent>
				) : (
					<ContactContent align="center">
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
							Thank you for your inquiry! We will get back to you within 48
							hours.
						</Thanks>
					</ContactContent>
				)}
			</Content>
			<Image>
				<Img src={img} alt="contact" />
			</Image>
		</Container>
	);
};

export default Contact;

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

const Error = styled.p`
	color: rgb(239, 0, 0);
	margin-top: 4px;
	line-height: 1.5;
	font-weight: 400;
	overflow-wrap: break-word;
	font-size: 16px;
	font-family: 'Old Standard TT', serif;
`;

const ButtonGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 40px;
`;

const Span = styled.span`
	font-size: 16px;
	margin-left: 16px;
	text-decoration: underline;
	color: rgb(122, 118, 110);
	display: inline;
	line-height: 1.5;
	font-weight: 400;
	text-align: center;
	font-family: 'Old Standard TT', serif;
	cursor: pointer;

	@media screen and (min-width: 1536px) {
		font-size: 18px;
	}
`;

const ReCaptcha = styled.p`
	font-size: 12px;
	color: rgb(145, 145, 145);
	line-height: 1.5;
	font-weight: 400;
	margin: 0;
	font-family: 'Old Standard TT', serif;
	text-align: center;
	margin-top: 40px;
	@media screen and (min-width: 1536px) {
		font-size: 14px;
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

	&:hover {
		background-color: black;
		color: white;
	}

	@media screen and (min-width: 768px) {
		font-size: 16px;
	}
`;

const ContactContent = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	flex-direction: column;
	align-items: ${(props) => (props.align ? 'center' : 'initial')};

	@media screen and (min-width: 768px) {
		padding-right: 50px;
	}
`;

const Break = styled.p`
	line-height: 1.8;
`;

const Subheading = styled.p`
	line-height: 1.8;
	font-weight: 400;
	overflow-wrap: break-word;
	font-family: 'Old Standard TT', serif;
	letter-spacing: normal;
	font-size: 16px;

	@media screen and (min-width: 1536px) {
		font-size: 18px;
	}
`;

const Heading = styled.h4`
	line-height: 1.25;
	max-width: 100%;
	font-size: 22px;
	font-weight: 400;
	font-family: 'Old Standard TT', serif;
	letter-spacing: 2px;
	overflow-wrap: break-word;
	margin-bottom: 24px;

	@media screen and (min-width: 1536px) {
		font-size: 24px;
	}
`;

const Image = styled.div`
	max-width: 100%;
	flex-basis: 50%;
	padding-right: 12px;
	padding-left: 12px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 768px) {
		padding-left: 24px;
		padding-right: 24px;
		max-width: 50%;
	}
`;

const Img = styled.img`
	max-width: 100%;

	@media screen and (max-width: 767px) {
		height: calc((100vw - 48px) / 1.33);
	}
`;

const Container = styled.div`
	margin-right: auto;
	margin-left: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 100px;
	flex-direction: column-reverse;
	padding-left: 12px;
	padding-right: 12px;
	margin-top: 100px;

	@media screen and (min-width: 768px) {
		width: 100%;
		flex-direction: row;
	}

	@media screen and (min-width: 1024px) {
		width: 984px;
		padding-left: 56px;
		padding-right: 56px;
	}

	@media screen and (min-width: 1280px) {
		width: 1160px;
	}

	@media screen and (min-width: 1536px) {
		width: 1280px;
	}
`;

const Content = styled.div`
	max-width: 100%;
	padding-left: 12px;
	padding-right: 12px;
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		max-width: 50%;
	}
	@media screen and (orientation: portrait) {
		margin-top: 100px;
	}
`;
