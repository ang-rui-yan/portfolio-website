import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/poppins";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";

const theme = createTheme({
	typography: {
		fontFamily: "Poppins",
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				"@font-face": {
					fontFamily: "Poppins",
				},
			},
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
