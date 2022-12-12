import React from 'react';
import { Container, styled, Typography } from '@mui/material';

const styles = {
	positionCenter: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},
};

function StyledSection({ title, isAlternate, isSmall, children }) {
	const CustomContainer = styled('div')(({ theme }) => ({
		backgroundColor: isAlternate ? '#122E4F' : '#',
		color: isAlternate ? 'white' : 'black',
		minHeight: isSmall ? '100%' : '100vh',
		height: '100%',
		padding: '80px 0px',
		position: 'relative',
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
				<Typography
					variant="h4"
					component="div"
				>
					{title}
				</Typography>
				<Container sx={isSmall ? '' : styles.positionCenter}>
					{React.Children.map(children, (child) => (
						<div>{child}</div>
					))}
				</Container>
			</Container>
		</CustomContainer>
	);
}

export default StyledSection;
