import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import SideBar from './SideBar';

const Header = () => {
	const [sideBar, setSideBar] = useState(false);
	const openSideBar = () => {
		setSideBar(true);
	};
	const closeSideBar = () => {
		setSideBar(false);
	};
	return (
		<header>
			<Nav>
				<Bars onClick={openSideBar}></Bars>
				<NavMenu>
					<NavLink to="/">— SiamBev</NavLink>
					<NavLink to="/newsletter">&nbsp;&nbsp;&nbsp;Newsletter</NavLink>
				</NavMenu>
				<SideBar onButtonClick={closeSideBar} status={sideBar}></SideBar>
			</Nav>
		</header>
	);
};

export default Header;

const Nav = styled.nav`
	background: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 88px;
`;

const NavLink = styled(Link)`
	padding-right: 40px;
	font-size: 14px;
	color: black;
	font-weight: 700;
	letter-spacing: 2px;
	font-family: 'Karla', sans-serif;

	&:hover {
		opacity: 0.5;
		color: black;
		text-decoration: none;
	}

	@media screen and (min-width: 1280px) {
		font-size: 14px;
	}

	@media screen and (min-width: 1536px) {
		font-size: 16px;
	}
`;

const Bars = styled(FaBars)`
	display: none;
	color: #000000;
	z-index: 5;
	&:hover {
		opacity: 0.5;
	}
	@media screen and (max-width: 1023px) {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(75%, 175%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

const NavMenu = styled.div`
	@media screen and (max-width: 1023px) {
		display: none;
	}
`;
