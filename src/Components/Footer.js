import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid, Link, Typography } from '@mui/material';

function Footer() {
	return (
		<Grid
			container
			spacing={1}
			sx={{ textAlign: 'center', alignContent: 'center', height: '15vh' }}
		>
			<Grid
				item
				xs={12}
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
				xs={6}
			>
				<Link
					href="https://www.linkedin.com/in/angruiyan/"
					color="inherit"
				>
					<LinkedInIcon />
				</Link>
			</Grid>
			<Grid
				item
				xs={6}
			>
				<Link
					href="https://github.com/ang-rui-yan"
					color="inherit"
				>
					<GitHubIcon />
				</Link>
			</Grid>
		</Grid>
	);
}

export default Footer;
