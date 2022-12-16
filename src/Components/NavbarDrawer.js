import {
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';

import { pages } from '../data/navbar';

const NavbarDrawer = () => {
	const [openDrawer, setOpenDrawer] = useState(false);

	return (
		<React.Fragment>
			<Drawer
				anchor="right"
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
			>
				<List>
					{pages.map((page, index) => (
						<ListItemButton
							onClick={() => setOpenDrawer(!openDrawer)}
							key={index}
							component="a"
							href={'#' + page.element}
						>
							<ListItemIcon>
								<ListItemText>{page.label}</ListItemText>
							</ListItemIcon>
						</ListItemButton>
					))}
				</List>
			</Drawer>
			<IconButton
				sx={{ color: 'inherit', marginLeft: 'auto' }}
				className="hamburger"
				onClick={() => setOpenDrawer(!openDrawer)}
			>
				<MenuIcon />
			</IconButton>
		</React.Fragment>
	);
};

export default NavbarDrawer;
