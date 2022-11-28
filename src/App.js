import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import React, { useRef } from "react";
import theme from "./theme";
import useScrollSnap from "react-use-scroll-snap";

import AboutMeSection from "./Components/AboutMeSection";
import ContactSection from "./Components/ContactSection";
import EducationSection from "./Components/EducationSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import ProjectSection from "./Components/ProjectSection";
import SkillSection from "./Components/SkillSection";
import WorkExperienceSection from "./Components/WorkExperienceSection";

const STYLES = {
	container: {
		height: "100vh",
	},
	small_container: {
		height: "50vh",
	},
	alternate: {
		backgroundColor: "#122E4F",
	},
};

function App() {
	const scrollRef = useRef(null);
	useScrollSnap({ ref: scrollRef, duration: 60, delay: 20 });

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Navbar />
				<Grid
					container
					direction="column"
					rowSpacing={1}
					columns={1}
					ref={scrollRef}
				>
					<Grid
						item
						style={STYLES.container}
					>
						<HeroSection />
					</Grid>
					<Grid
						item
						style={Object.assign(
							{},
							STYLES.container,
							STYLES.alternate
						)}
					>
						<AboutMeSection />
					</Grid>
					<Grid
						item
						style={Object.assign({}, STYLES.container)}
					>
						<EducationSection />
					</Grid>
					<Grid
						item
						style={Object.assign(
							{},
							STYLES.container,
							STYLES.alternate
						)}
					>
						<SkillSection />
					</Grid>
					<Grid
						item
						style={Object.assign({}, STYLES.container)}
					>
						<WorkExperienceSection />
					</Grid>
					<Grid
						item
						style={Object.assign(
							{},
							STYLES.container,
							STYLES.alternate
						)}
					>
						<ProjectSection />
					</Grid>
					<Grid
						item
						style={Object.assign({}, STYLES.small_container)}
					>
						<ContactSection />
					</Grid>
				</Grid>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
