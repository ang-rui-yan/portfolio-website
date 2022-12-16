import { Button, Grid, makeStyles, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import StyledSection from './StyledSection';

function ContactSection({ title, isAlternate, isSmaller }) {
	return (
		<StyledSection
			title={title}
			isAlternate={isAlternate}
			isSmaller={isSmaller}
		>
			<Grid
				container
				sx={{ backgroundColor: 'white', borderRadius: '10px', padding: 3 }}
			>
				<Grid
					item
					xs={12}
					px={1}
				>
					<Typography color="black">Let's talk about technology!</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					px={1}
					pt={1}
				>
					<TextField
						fullWidth
						label="Name"
						size="small"
						disabled
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					p={1}
				>
					<TextField
						fullWidth
						label="Email Address"
						size="small"
						disabled
					/>
				</Grid>
				<Grid
					item
					xs={12}
					px={1}
					pt={1}
				>
					<TextField
						label="Subject"
						fullWidth
						size="small"
						disabled
					/>
				</Grid>
				<Grid
					item
					xs={12}
					px={1}
					pt={1}
				>
					<TextField
						label="Message"
						size="small"
						fullWidth
						multiline
						rows={4}
						disabled
					/>
				</Grid>
				<Grid
					item
					xs={12}
					px={1}
					pt={1}
				>
					<Button
						variant="contained"
						fullWidth
						size="small"
						disabled
						sx={{ width: 'auto', textTransform: 'capitalize' }}
					>
						Send message
					</Button>
				</Grid>
			</Grid>
		</StyledSection>
	);
}

export default ContactSection;
