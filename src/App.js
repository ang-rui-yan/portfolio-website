import { CssBaseline, Grid, ThemeProvider } from '@mui/material';
import React, { useRef } from 'react';
import theme from './assets/theme';

import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { sections } from './data/sections';
import CurveComponent from './components/CurveComponents';

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
						<CurveComponent
							variant={3}
							isAlternate={false}
						/>
					</Grid>
					{sections.map((section, index) => (
						<Grid
							key={index}
							item
							id={section.id}
							sx={{ width: '100%' }}
						>
							{section.sectionComponent()}
							<CurveComponent
								variant={section.variant}
								isAlternate={section.isAlternate}
							/>
						</Grid>
					))}
				</Grid>
				<Footer />
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
