import React from 'react';
import { Container, styled, Typography } from '@mui/material';

function StyledSection({ isAlternate, isSmall, children }) {
	const CustomContainer = styled('div')(({ theme }) => ({
		backgroundColor: isAlternate ? '#122E4F' : '#',
		color: isAlternate ? 'white' : 'black',
		height: isSmall ? '100%' : '100vh',
		padding: '80px 0px',
	}));
	const Subtitle = styled('div')(({ theme }) => ({
		fontSize: '1rem',
		'@media (min-width:600px)': {
			fontSize: '1rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '1.5rem',
		},
	}));

	return (
		<CustomContainer>
			<Container>
				{React.Children.map(children, (child) => (
					<div>{child}</div>
				))}
			</Container>
		</CustomContainer>
	);
}

export default StyledSection;
