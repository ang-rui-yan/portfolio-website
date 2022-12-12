import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import StyledSection from './StyledSection';

const data = [
	{
		title: 'Programming Language',
		details: ['C#', 'Python', 'C', 'Java', 'JavaScript'],
	},
	{
		title: 'Front end',
		details: ['React.js', 'HTML', 'CSS'],
	},
	{
		title: 'Back end',
		details: ['Flask', 'SQL'],
	},
];

function SkillSection({ title, isAlternate }) {
	return (
		<StyledSection
			title={title}
			isAlternate={isAlternate}
		>
			<Grid
				container
				spacing={5}
				padding={5}
				alignItems="stretch"
			>
				{data.map((content, index) => (
					<Grid
						item
						xs={12}
						sm={6}
						key={index}
					>
						<Card>
							<CardContent>
								<Typography
									variant="h5"
									component="div"
								>
									{content.title}
								</Typography>
								<Grid container>
									{content.details.map((detail, index) => (
										<Grid
											item
											xs={6}
											key={index}
										>
											{detail}
										</Grid>
									))}
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</StyledSection>
	);
}

export default SkillSection;
