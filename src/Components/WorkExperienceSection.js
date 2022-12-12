import { Typography } from '@mui/material';
import React from 'react';
import StyledSection from './StyledSection';

function WorkExperienceSection({ isAlternate }) {
	return (
		<StyledSection isAlternate={isAlternate}>
			<Typography
				variant="h4"
				component="div"
			>
				Work Experience
			</Typography>
		</StyledSection>
	);
}

export default WorkExperienceSection;
