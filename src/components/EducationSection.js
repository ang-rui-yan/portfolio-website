import { Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import StyledSection from './StyledSection';

import Timeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
	timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import { education } from '../data/education';

function TimelineComponentAlternating({ timeline, university, content }) {
	return (
		<TimelineItem
			sx={{
				[`& .${timelineOppositeContentClasses.root}`]: {
					flex: 0.3,
				},
			}}
		>
			<TimelineOppositeContent color="textSecondary">{timeline}</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDot
					color="primary"
					variant="outlined"
				></TimelineDot>
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent sx={{ paddingTop: '1px', paddingBottom: 5, px: 4 }}>
				<Typography
					variant="h6"
					component="span"
				>
					{university}
				</Typography>
				<ul>
					{content.map((detail, index) => (
						<li key={index}>{detail}</li>
					))}
				</ul>
			</TimelineContent>
		</TimelineItem>
	);
}

function TimelineComponent({ timeline, university, content }) {
	const breakpoints = {
		isXXs: useMediaQuery('(max-width: 380px)'),
		isXs: useMediaQuery('(max-width: 640px)'),
	};

	return (
		<TimelineItem>
			<TimelineSeparator>
				<TimelineDot
					color="primary"
					variant="outlined"
				></TimelineDot>
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent sx={{ paddingTop: '1px', paddingBottom: 5, px: 4 }}>
				<Typography
					color="textSecondary"
					sx={breakpoints.isXXs ? { fontSize: '0.7rem' } : { fontSize: '1rem' }}
				>
					{timeline}
				</Typography>
				<Typography
					variant="h6"
					component="span"
					sx={breakpoints.isXXs ? { fontSize: '0.7rem' } : { fontSize: '1rem' }}
				>
					{university}
				</Typography>
				<ul style={{ listStylePosition: 'inline', paddingLeft: '10px' }}>
					{content.map((detail, index) => (
						<li
							key={index}
							style={
								breakpoints.isXXs ? { fontSize: '0.7rem' } : { fontSize: '0.8rem' }
							}
						>
							{detail}
						</li>
					))}
				</ul>
			</TimelineContent>
		</TimelineItem>
	);
}

function EducationSection({ title, isAlternate }) {
	const breakpoints = {
		isXXs: useMediaQuery('(max-width: 328px)'),
		isXs: useMediaQuery('(max-width: 640px)'),
		isSm: useMediaQuery('(min-width: 641px) and (max-width: 768px)'),
		isMd: useMediaQuery('(min-width: 769px) and (max-width: 1024px)'),
		isLg: useMediaQuery('(min-width: 1025px)'),
		active: 'xs',
	};

	return (
		<StyledSection
			title={title}
			isAlternate={isAlternate}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
			>
				<Timeline
					sx={
						breakpoints.isXs
							? {
									[`& .${timelineItemClasses.root}:before`]: {
										flex: 0,
										padding: 0,
									},
							  }
							: { width: '100%' }
					}
				>
					{education.map((point, index) =>
						breakpoints.isXs ? (
							<TimelineComponent
								key={index}
								timeline={point.timeline}
								university={point.university}
								content={point.content}
							/>
						) : (
							<TimelineComponentAlternating
								key={index}
								timeline={point.timeline}
								university={point.university}
								content={point.content}
							/>
						)
					)}
				</Timeline>
			</div>
		</StyledSection>
	);
}

export default EducationSection;
