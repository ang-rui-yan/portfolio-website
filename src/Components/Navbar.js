import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import NavbarDrawer from './NavbarDrawer';
import '../assets/navbar.css';

const PAGES = [
	{ label: 'About me', element: 'aboutMe' },
	{ label: 'Education', element: 'education' },
	{ label: 'Skills', element: 'skills' },
	{ label: 'Projects', element: 'projects' },
	{ label: 'Contact me', element: 'contactMe' },
];

function Navbar() {
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('md'));

	const [click, setClick] = useState(false);

	const closeMenu = () => setClick(false);

	// When the navbar crosses alternate element
	// it changes the color
	const [navbarColor, setNavbarColor] = useState('');
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScroll = () => {
		let targetElements = document.querySelectorAll('.alternate-element');
		let headerRect = document.getElementById('header').getBoundingClientRect();

		let len = targetElements.length;
		let onAlternate = new Array(len).fill(false);

		targetElements.forEach((element, index) => {
			const rect = element.getBoundingClientRect();
			let overlap = !(
				rect.right < headerRect.left ||
				rect.left > headerRect.right ||
				rect.bottom - 10 < headerRect.top ||
				rect.top > headerRect.bottom
			);
			if (overlap) {
				onAlternate[index] = true;
			} else {
				onAlternate[index] = false;
			}
		});
		if (onAlternate.includes(true)) {
			setNavbarColor('on-alternate-color-link');
		} else {
			setNavbarColor('');
		}
	};

	return (
		<React.Fragment>
			<AppBar
				sx={{ backgroundColor: 'rgba(0,0,0,0)', height: '60px' }}
				color="inherit"
				elevation={0}
				position="fixed"
				className={'header ' + navbarColor}
				id="header"
			>
				<Toolbar className="navbar">
					<Typography
						variant="h6"
						component="a"
						href={'#hero'}
						className="logo"
						sx={{ color: 'inherit', textDecoration: 'inherit' }}
					>
						A.RY
					</Typography>
					{isMatch ? (
						<>
							<NavbarDrawer />
						</>
					) : (
						<ul className={click ? 'nav-menu active' : 'nav-menu'}>
							{PAGES.map((page, index) => (
								<li
									key={index}
									className="nav-item"
								>
									<Link
										to={page.element}
										spy={true}
										smooth={true}
										offset={0}
										duration={100}
										onClick={closeMenu}
									>
										{page.label}
									</Link>
								</li>
							))}
						</ul>
					)}
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Navbar;
