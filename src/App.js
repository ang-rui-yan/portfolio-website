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
					>
						<HeroSection />
					</Grid>
					<Grid item>
						<AboutMeSection isAlternate={true} />
					</Grid>
					<Grid item>
						<EducationSection />
					</Grid>
					<Grid item>
						<SkillSection isAlternate={true} />
					</Grid>
					<Grid item>
						<WorkExperienceSection />
					</Grid>
					<Grid item>
						<ProjectSection isAlternate={true} />
					</Grid>
					<Grid item>
						<ContactSection isSmall={true} />
					</Grid>
				</Grid>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
