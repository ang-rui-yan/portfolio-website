import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid, Link, Typography } from '@mui/material';
import { externalUrls } from '../data/urls';

function Footer() {
	return (
		<Grid
			container
			spacing={0}
			sx={{ textAlign: 'center', alignContent: 'center', height: '15vh' }}
		>
			<Grid
				item
				xs={12}
				sm={6}
			>
				<Typography
					variant="h6"
					component="div"
				>
					Follow me!
				</Typography>
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
			>
				<Link
					href={externalUrls.linkedin}
					color="inherit"
					px={1}
				>
					<LinkedInIcon />
				</Link>
				<Link
					href={externalUrls.github}
					color="inherit"
					px={1}
				>
					<GitHubIcon />
				</Link>
			</Grid>
			<Grid
				item
				xs={12}
			>
				<Typography
					sx={{ fontSize: '0.6em' }}
					component="span"
				>
					Rui Yan, 2022. All rights reserved.
				</Typography>
			</Grid>
		</Grid>
	);
}

export default Footer;
