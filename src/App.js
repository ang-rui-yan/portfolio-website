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
import Footer from './components/Footer';

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
		id: 'projects',
		sectionComponent: () => <ProjectSection title="Projects" />,
	},
	{
		id: 'contactMe',
		sectionComponent: () => (
			<ContactSection
				title="Get in touch"
				isAlternate={true}
				isSmaller={true}
			/>
		),
	},
];

function App() {
	const scrollRef = useRef(null);
	// useScrollSnap({ ref: scrollRef, duration: 30, delay: 10 });

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
				<Footer />
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
