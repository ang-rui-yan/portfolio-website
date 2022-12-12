import { Typography } from '@mui/material';
import React from 'react';
import StyledSection from './StyledSection';

function ProjectSection({ title, isAlternate }) {
	return (
		<StyledSection
			title={title}
			isAlternate={isAlternate}
		></StyledSection>
	);
}

export default ProjectSection;
