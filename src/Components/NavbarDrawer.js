import {
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

const PAGES = [
	"About me",
	"Education",
	"Skills",
	"Work experience",
	"Projects",
];

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
					{PAGES.map((page, index) => (
						<ListItemButton
							onClick={() => setOpenDrawer(!openDrawer)}
							key={index}
						>
							<ListItemIcon>
								<ListItemText>{page}</ListItemText>
							</ListItemIcon>
						</ListItemButton>
					))}
				</List>
			</Drawer>
			<IconButton
				sx={{ color: "inherit", marginLeft: "auto" }}
				onClick={() => setOpenDrawer(!openDrawer)}
			>
				<MenuIcon />
			</IconButton>
		</React.Fragment>
	);
};

export default NavbarDrawer;
