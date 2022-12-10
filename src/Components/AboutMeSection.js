import { Button, styled, Typography, useMediaQuery } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import React from 'react';
import standingImage from '../assets/images/standing.png';

function AboutMeSection() {
	const CustomBodyText = styled('div')(({ theme }) => ({
		margin: 'auto',
		marginBottom: breakpoints.isXs || breakpoints.isSm ? 20 : 50,
		width: breakpoints.isXs || breakpoints.isSm ? '90%' : '60%',
		fontSize: '0.7rem',
		[theme.breakpoints.up('sm')]: {
			fontSize: '1.2rem',
		},
	}));

	const breakpoints = {
		isXs: useMediaQuery('(max-width: 640px)'),
		isSm: useMediaQuery('(min-width: 641px) and (max-width: 768px)'),
		isMd: useMediaQuery('(min-width: 769px) and (max-width: 1024px)'),
		isLg: useMediaQuery('(min-width: 1025px)'),
		active: 'xs',
	};

	return (
		<>
			<div
				style={{
					padding: '20px',
					paddingTop: '40px',
					color: 'white',
				}}
			>
				<Typography
					variant="h4"
					component="div"
				>
					About Me
				</Typography>

				<div
					style={{
						textAlign: 'center',
						alignItems: 'center',
					}}
				>
					<svg
						style={{ marginTop: 5, marginBottom: 10 }}
						width={breakpoints.isXs || breakpoints.isSm ? '55%' : '20%'}
						height="70%"
						viewBox="0 0 185 192"
						fill="none"
					>
						<rect
							x="10.6914"
							y="42.5919"
							width="149.194"
							height="149.194"
							rx="8"
							transform="rotate(-5 10.6914 42.5919)"
							fill="#A0B7E2"
						/>
						<rect
							x="16.9082"
							y="35.8065"
							width="149.194"
							height="149.194"
							rx="8"
							fill="#DBE2EF"
						/>
						<rect
							width="185"
							height="185"
							fill="url(#pattern0)"
						/>
						<defs>
							<pattern
								id="pattern0"
								patternContentUnits="objectBoundingBox"
								width="1"
								height="1"
							>
								<use
									href="#selfImage"
									transform="translate(0 -0.166282) scale(0.00230947)"
								/>
							</pattern>
							<image
								id="selfImage"
								width="433"
								height="870"
								href={standingImage}
							/>
						</defs>
					</svg>

					<CustomBodyText>
						I am currently pursuing a degree in Computer Science in Singapore Management
						University (SMU).
						<br />
						<br />I enjoy programming and I would love to work in a team. Outside of my
						programming bubble, I enjoy playing the flute, reading web novels and doing
						martial arts.
					</CustomBodyText>
					<Button
						variant="contained"
						style={{ backgroundColor: 'white', color: 'black' }}
					>
						<DownloadIcon />
						<Typography
							className="poppinFont"
							variant="subtitle2"
						>
							DOWNLOAD CV
						</Typography>
					</Button>
				</div>
			</div>
		</>
	);
}

export default AboutMeSection;
