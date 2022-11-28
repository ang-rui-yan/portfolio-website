import {
	AppBar,
	Tab,
	Tabs,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import React, { useState } from "react";
import NavbarDrawer from "./NavbarDrawer";

const PAGES = [
	"About me",
	"Education",
	"Skills",
	"Work experience",
	"Projects",
	"Contact me",
];

function Navbar() {
	const [value, setValue] = useState(0);
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<React.Fragment>
			<AppBar
				sx={{ backgroundColor: "rgba(0,0,0,0)" }}
				color="inherit"
				elevation={0}
				position="fixed"
			>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
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
									marginLeft: "auto",
								}}
								textColor="inherit"
								value={value}
								onChange={(e, value) => setValue(value)}
								indicatorColor="secondary"
							>
								{PAGES.map((page, index) => (
									<Tab
										key={index}
										label={page}
									/>
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
