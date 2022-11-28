import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme();

theme = responsiveFontSizes(theme);
theme.typography.h5 = {
	fontSize: "2rem",
	"@media (min-width:600px)": {
		fontSize: "2rem",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "3.5rem",
	},
};
theme.typography.body1 = {
	fontSize: "1.2rem",
	"@media (min-width:600px)": {
		fontSize: "1.2rem",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "1.8rem",
	},
};
theme.typography.subtitle1 = {
	fontSize: "1rem",
	"@media (min-width:600px)": {
		fontSize: "1rem",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "1.5rem",
	},
};
theme.typography.subtitle2 = {
	fontSize: "0.7rem",
	"@media (min-width:640px)": {
		fontSize: "0.7rem",
	},
	[theme.breakpoints.up("sm")]: {
		fontSize: "1.2rem",
	},
};

export default theme;
