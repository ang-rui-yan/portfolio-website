import { Typography } from '@mui/material';
import React from 'react';
import StyledSection from './StyledSection';

function TimelineComponent({ timeline, university, content }) {
	return (
		<div>
			<h2>{timeline}</h2>
			<h3>{university}</h3>
			<ul>
				{content.map((detail, index) => (
					<li key={index}>{detail}</li>
				))}
			</ul>
		</div>
	);
}

function EducationSection({ isAlternate }) {
	const data = [
		{
			timeline: 'Aug 2022 - Jul 2026',
			university: 'Singapore Management University',
			content: [
				'Pursuing Bachelor of Science - Computer Science',
				'Expected year of graduation in 2026',
				'Looking to pick a track in Artifical Intelligence or Cyberphysical system',
			],
		},
		{
			timeline: 'Apr 2017 - Mar 2020',
			university: 'Temasek Polytechnic',
			content: [
				'Graduated with Diploma with Merit in Financial Business Informatics',
				'Achieved 2nd in cohort',
				'Graduated with Diploma Plus in Entrepreneurship and Innovation',
			],
		},
	];
	return (
		<StyledSection isAlternate={isAlternate}>
			<Typography
				variant="h4"
				component="div"
			>
				Education
			</Typography>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
			>
				{data.map((point, index) => (
					<TimelineComponent
						key={index}
						timeline={point.timeline}
						university={point.university}
						content={point.content}
					/>
				))}
			</div>
		</StyledSection>
	);
}

export default EducationSection;
