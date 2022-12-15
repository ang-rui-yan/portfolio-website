import React from 'react';
import { Container, Grid, styled, Typography } from '@mui/material';

const styles = {
	positionCenter: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		height: 'auto',
	},
};

function StyledSection({ title, isAlternate, children }) {
	const CustomContainer = styled('div')(({ theme }) => ({
		backgroundColor: isAlternate ? '#122E4F' : '#',
		color: isAlternate ? 'white' : 'black',
		minHeight: '100vh',
		maxHeight: '100%',
		position: 'relative',
	}));

	return (
		<CustomContainer className={isAlternate ? 'alternate-element' : ''}>
			<Grid container>
				<Grid
					item
					xs={12}
				>
					<Typography
						variant="h4"
						component="div"
					>
						{title}
					</Typography>
				</Grid>
				<Grid item>
					<div style={styles.positionCenter}>
						{React.Children.map(children, (child) => (
							<div>{child}</div>
						))}
					</div>
				</Grid>
			</Grid>
			<Container sx={{ height: '90%', paddingTop: '5%' }}></Container>
		</CustomContainer>
	);
}

export default StyledSection;
