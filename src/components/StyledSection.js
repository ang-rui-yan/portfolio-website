import React from 'react';
import { Container, styled, Typography } from '@mui/material';

function StyledSection({ title, isAlternate, children, isSmaller }) {
	const CustomContainer = styled('div')(({ theme }) => ({
		backgroundColor: isAlternate ? '#122E4F' : '#',
		color: isAlternate ? 'white' : 'black',
		minHeight: isSmaller ? '85vh' : '100vh',
		height: '100%',
		padding: '60px 0',
		display: 'flex',
	}));

	const CustomElementContainer = styled('div')(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	}));

	return (
		<CustomContainer className={isAlternate ? 'alternate-element' : ''}>
			<Container sx={{ flexGrow: 1 }}>
				<Typography
					variant="h4"
					component="div"
				>
					{title}
				</Typography>
				<CustomElementContainer>
					{React.Children.map(children, (child) => (
						<div style={{ width: '100%', margin: 'auto' }}>{child}</div>
					))}
				</CustomElementContainer>
			</Container>
		</CustomContainer>
	);
}

export default StyledSection;
