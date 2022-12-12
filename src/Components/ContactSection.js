import { Button, Grid, makeStyles, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import StyledSection from './StyledSection';

function ContactSection({ title, isAlternate, isSmall }) {
	return (
		<StyledSection
			title={title}
			isAlternate={isAlternate}
			isSmall={isSmall}
		>
			<Grid
				container
				sx={{ paddingTop: '40px' }}
			>
				<Grid
					item
					xs={12}
					sm={3}
				>
					<Typography>Let's talk about everything!</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sm={9}
				>
					<Grid
						container
						spacing={3}
					>
						<Grid
							item
							xs={12}
							sm={6}
						>
							<TextField
								fullWidth
								label="Name"
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
						>
							<TextField
								fullWidth
								label="Email Address"
							/>
						</Grid>

						<Grid
							item
							xs={12}
						>
							<TextField
								label="Subject"
								fullWidth
							/>
						</Grid>
						<Grid
							item
							xs={12}
						>
							<TextField
								label="Message"
								fullWidth
								multiline
								rows={4}
							/>
						</Grid>
						<Grid
							item
							xs={12}
						>
							<Button
								variant="contained"
								fullWidth
								size="small"
								sx={{ width: '20%', textTransform: 'capitalize' }}
							>
								Send message
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</StyledSection>
	);
}

export default ContactSection;
