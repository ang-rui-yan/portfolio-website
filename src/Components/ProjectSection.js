import { Typography } from '@mui/material';
import React from 'react';
import StyledSection from './StyledSection';

function ProjectSection({ isAlternate }) {
	return (
		<StyledSection isAlternate={isAlternate}>
			<Typography
				color="white"
				variant="h4"
				component="div"
			>
				Projects
			</Typography>
		</StyledSection>
	);
}

export default ProjectSection;
