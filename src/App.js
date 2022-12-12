import { CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material';
import React, { useRef } from 'react';
import theme from './assets/theme';
import useScrollSnap from 'react-use-scroll-snap';

import AboutMeSection from './components/AboutMeSection';
import ContactSection from './components/ContactSection';
import EducationSection from './components/EducationSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';
import SkillSection from './components/SkillSection';
import WorkExperienceSection from './components/WorkExperienceSection';

const STYLES = {
	container: {
		position: 'relative',
		height: 'auto',
	},
	small_container: { paddingBottom: '40px' },
	alternate: {
		backgroundColor: '#122E4F',
	},
};

function App() {
	const scrollRef = useRef(null);
	// useScrollSnap({ ref: scrollRef, duration: 60, delay: 20 });

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Navbar />
				<Grid
					container
					direction="column"
					columns={1}
					ref={scrollRef}
				>
					<Grid
						item
						style={STYLES.container}
						id="hero"
					>
						{/* is not part of styledsection */}
						<HeroSection />
					</Grid>
					<Grid
						item
						id="aboutMe"
					>
						<AboutMeSection
							title="About Me"
							isAlternate={true}
						/>
					</Grid>
					<Grid
						item
						id="education"
					>
						<EducationSection title="Education" />
					</Grid>
					<Grid
						item
						id="skills"
					>
						<SkillSection
							title="Skills"
							isAlternate={true}
						/>
					</Grid>
					<Grid
						item
						id="workExperience"
					>
						<WorkExperienceSection title="Work experience" />
					</Grid>
					<Grid
						item
						id="projects"
					>
						<ProjectSection
							title="Project"
							isAlternate={true}
						/>
					</Grid>
					<Grid
						item
						id="contactMe"
					>
						<ContactSection
							title="Get in touch"
							isSmall={true}
						/>
					</Grid>
				</Grid>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
