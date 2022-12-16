import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import "@fontsource/poppins";

let theme = createTheme({
	typography: {
		fontFamily: `"Poppins", sans-serif`,
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
	},
});

theme = responsiveFontSizes(theme);

export default theme;
