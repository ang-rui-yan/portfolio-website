import { AppBar, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import NavbarDrawer from './NavbarDrawer';

const PAGES = [
	{ label: 'About me', element: 'aboutMe' },
	{ label: 'Education', element: 'education' },
	{ label: 'Skills', element: 'skills' },
	{ label: 'Work experience', element: 'workExperience' },
	{ label: 'Projects', element: 'projects' },
	{ label: 'Contact me', element: 'contactMe' },
];

function Navbar() {
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('md'));

	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<React.Fragment>
			<AppBar
				sx={{ backgroundColor: 'rgba(0,0,0,0)' }}
				color="inherit"
				elevation={0}
				position="fixed"
			>
				<Toolbar>
					<Typography
						variant="h6"
						component="a"
						href={'#hero'}
						sx={{ color: 'inherit', textDecoration: 'inherit' }}
					>
						A.RY
					</Typography>
					{isMatch ? (
						<>
							<NavbarDrawer />
						</>
					) : (
						<>
							<Tabs
								sx={{
									marginLeft: 'auto',
								}}
								textColor="inherit"
								value={value}
								onChange={handleChange}
								indicatorColor="secondary"
							>
								{PAGES.map((page, index) => (
									<Tab
										key={index}
										label={page.label}
										component="a"
										href={'#' + page.element}
									></Tab>
								))}
							</Tabs>
						</>
					)}
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Navbar;
