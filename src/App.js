import { Grid } from "@mui/material";
import React from "react";
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
	return (
		<React.Fragment>
			<Navbar />
			<Grid
				container
				direction="column"
				rowSpacing={1}
				columns={1}
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
		</React.Fragment>
	);
}

export default App;
