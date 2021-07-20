import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { VscClose } from 'react-icons/vsc';

const SideBar = ({ onButtonClick, status }) => {
	return (
		<SideMenu status={status} className="hello">
			<Row>
				<MdClose onClick={onButtonClick} />
			</Row>
			<Nav>
				<NavLink to="/">— SiamBev</NavLink>
				<NavLink to="/newsletter">&nbsp;&nbsp;&nbsp;Newsletter</NavLink>
			</Nav>
		</SideMenu>
	);
};

export default SideBar;

const Row = styled.div`
	width: 100%;
	padding-bottom: 20px;
	padding-top: 20px;
	padding-right: 16px;
	padding-left: 8px;
	height: 64px;
	display: flex;
	justify-content: flex-end;
`;

const MdClose = styled(VscClose)`
	color: #000000;
	width: 40px;
	height: 40px;
	&:hover {
		opacity: 0.5;
	}
`;

const SideMenu = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 99;
	top: 0;
	left: 0;
	background: white;
	visibility: ${({ status }) => (status ? 'visible' : 'hidden')};
	-webkit-transform: ${({ status }) =>
		status ? 'translate3d(0px, 0px, 0px)' : 'translate3d(-100%, 0px, 0px);'};
	transform: ${({ status }) =>
		status ? 'translate3d(0px, 0px, 0px)' : 'translate3d(-100%, 0px, 0px);'};
	transition: all 0.5s ease 0s;
	-webkit-transition: all 0.5s ease 0s;
`;

const Nav = styled.div`
	background: transparent;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 136px;
`;

const NavLink = styled(Link)`
	padding-right: 40px;
	font-size: 16px;
	color: black;
	font-weight: 700;
	letter-spacing: 2px;

	&:hover {
		opacity: 0.5;
		color: black;
		text-decoration: none;
	}
`;
