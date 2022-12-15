import { CssBaseline, Grid, ThemeProvider } from '@mui/material';
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
	alternate: {
		backgroundColor: '#122E4F',
	},
};

const sections = [
	{
		id: 'aboutMe',
		sectionComponent: () => (
			<AboutMeSection
				title="About Me"
				isAlternate={true}
			/>
		),
	},
	{
		id: 'education',
		sectionComponent: () => <EducationSection title="Education" />,
	},
	{
		id: 'skills',
		sectionComponent: () => (
			<SkillSection
				title="Skills"
				isAlternate={true}
			/>
		),
	},
	{
		id: 'workExperience',
		sectionComponent: () => <WorkExperienceSection title="Work experience" />,
	},
	{
		id: 'projects',
		sectionComponent: () => (
			<ProjectSection
				title="Projects"
				isAlternate={true}
			/>
		),
	},
	{
		id: 'contactMe',
		sectionComponent: () => <ContactSection title="Get in touch" />,
	},
];

function App() {
	const scrollRef = useRef(null);
	useScrollSnap({ ref: scrollRef, duration: 30, delay: 10 });

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
						id="hero"
						sx={{ width: '100%' }}
					>
						{/* is not part of styledsection */}
						<HeroSection />
					</Grid>
					{sections.map((section) => (
						<Grid
							item
							id={section.id}
							sx={{ width: '100%' }}
						>
							{section.sectionComponent()}
						</Grid>
					))}
				</Grid>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
