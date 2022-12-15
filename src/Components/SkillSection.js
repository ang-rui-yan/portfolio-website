import { Card, CardContent, Chip, Grid, Typography } from '@mui/material';
import React from 'react';
import StyledSection from './StyledSection';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import TerminalIcon from '@mui/icons-material/Terminal';

const data = [
	{
		title: 'Programming Language',
		icon: <CodeIcon />,
		details: ['C#', 'Python', 'C', 'Java', 'JavaScript'],
	},
	{
		title: 'Front end',
		icon: <BrushIcon />,
		details: ['React.js', 'HTML', 'CSS'],
	},
	{
		title: 'Back end',
		icon: <TerminalIcon />,
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
						sm={4}
						key={index}
					>
						<Card sx={{ height: '40vh' }}>
							<CardContent
								sx={{
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'end',
								}}
							>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									{content.icon}
									<Typography
										variant="h6"
										component="div"
										sx={{ py: 2 }}
									>
										{content.title}
									</Typography>
								</div>
								<div style={{ display: 'block', height: '30%', gap: '10px' }}>
									{content.details.map((detail, index) => (
										<Chip
											sx={{ marginRight: '5px', marginBottom: '5px' }}
											key={index}
											label={detail}
										/>
									))}
								</div>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</StyledSection>
	);
}

export default SkillSection;
