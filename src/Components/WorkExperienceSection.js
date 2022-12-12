import { Typography } from '@mui/material';
import React from 'react';
import StyledSection from './StyledSection';

function WorkExperienceSection({ title, isAlternate }) {
	return (
		<StyledSection
			title={title}
			isAlternate={isAlternate}
		></StyledSection>
	);
}

export default WorkExperienceSection;
