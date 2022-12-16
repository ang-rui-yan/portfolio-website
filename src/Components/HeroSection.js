import { styled, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const STYLES = {
	container: {
		position: 'relative',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	blobSection: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	blob: {
		position: 'absolute',
		width: '40em',
		height: '40em',
	},
	blobGlow: {
		position: 'absolute',
		width: '40em',
		height: '40em',
		filter: 'blur(2.5em)',
	},
	text: {
		textAlign: 'center',
		position: 'absolute',
		left: '50%',
		top: '55%',
		width: '100%',
		transform: 'translate(-50%, -50%)',
	},
	bold: {
		fontWeight: '600',
	},
};

function HeroSection() {
	const LargeText = styled('div')(({ theme }) => ({
		fontSize: '2rem',
		'@media (min-width:600px)': {
			fontSize: '2rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '3.5rem',
		},
	}));
	const SmallText = styled('div')(({ theme }) => ({
		fontSize: '1.2rem',
		'@media (min-width:600px)': {
			fontSize: '1.2rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '1.8rem',
		},
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
		<>
			<Container style={STYLES.container}>
				<div style={STYLES.blobSection}>
					<div style={STYLES.blob}>
						<svg
							width="100%"
							viewBox="0 0 200 200"
							xmlns="http://www.w3.org/2000/svg"
						>
							<defs>
								<linearGradient
									gradientTransform="rotate(0, 0.5, 0.5)"
									x1="10%"
									y1="10%"
									x2="0%"
									y2="0%"
									id="gradient"
								>
									<stop
										stop-color="#DBE2EF"
										stop-opacity="1"
										offset="0%"
									></stop>
									<stop
										stop-color="#122E4F"
										stop-opacity="1"
										offset="100%"
									></stop>
								</linearGradient>
								<filter
									id="ffflux-filter"
									x="-20%"
									y="-20%"
									width="140%"
									height="140%"
									filterUnits="objectBoundingBox"
									primitiveUnits="userSpaceOnUse"
									color-interpolation-filters="sRGB"
								>
									<feTurbulence
										type="fractalNoise"
										baseFrequency="0.001 0.001"
										numOctaves="1"
										seed="2"
										stitchTiles="stitch"
										x="0%"
										y="0%"
										width="100%"
										height="100%"
										result="turbulence"
									></feTurbulence>
									<feGaussianBlur
										stdDeviation="0 0"
										x="0%"
										y="0%"
										width="100%"
										height="100%"
										in="turbulence"
										edgeMode="duplicate"
										result="blur"
									></feGaussianBlur>
									<feBlend
										mode="color-dodge"
										x="0%"
										y="0%"
										width="100%"
										height="100%"
										in="SourceGraphic"
										in2="blur"
										result="blend"
									></feBlend>
								</filter>
							</defs>
							<path
								fill="url(#gradient)"
								transform="translate(100 100)"
							>
								<animate
									attributeName="d"
									dur="10000ms"
									repeatCount="indefinite"
									values="M40.7,-64.9C49.2,-57.9,50,-40.5,57.4,-25.8C64.8,-11,78.9,1.2,77.1,10.8C75.3,20.5,57.7,27.6,45.2,35.4C32.6,43.2,25.1,51.6,14.7,58.5C4.3,65.4,-9,70.7,-22.8,70C-36.6,69.4,-50.8,62.9,-57.1,51.7C-63.3,40.5,-61.5,24.5,-63.8,9.1C-66.1,-6.3,-72.5,-21.2,-70.9,-35.5C-69.2,-49.9,-59.6,-63.8,-46.4,-68.6C-33.3,-73.4,-16.6,-69.1,-0.3,-68.7C16.1,-68.3,32.3,-71.8,40.7,-64.9Z;
									M34.8,-55.8C44.3,-48.1,50.5,-37,60,-24.8C69.6,-12.7,82.6,0.5,85.7,15.7C88.8,31,82.2,48.2,70,58.6C57.8,69,40.1,72.6,23.5,75.3C6.9,78.1,-8.6,79.9,-20.3,74.2C-32.1,68.5,-40.1,55.1,-48.4,43.2C-56.7,31.4,-65.2,21,-67,9.6C-68.7,-1.9,-63.7,-14.4,-56.1,-23.3C-48.4,-32.3,-38.1,-37.8,-28.3,-45.3C-18.5,-52.8,-9.3,-62.3,1.7,-65C12.7,-67.6,25.4,-63.4,34.8,-55.8Z;
									M36.2,-63.5C44.7,-50.9,47.8,-37.1,57.1,-24C66.5,-10.8,82.1,1.6,79.9,11C77.8,20.4,57.9,26.7,44.3,33.3C30.6,39.9,23.2,46.8,13.2,53.8C3.2,60.8,-9.4,67.9,-21.9,67.5C-34.4,67.1,-46.8,59.2,-56.2,48.6C-65.6,38,-72,24.6,-74.1,10.6C-76.3,-3.5,-74.1,-18.2,-65.9,-27.6C-57.7,-36.9,-43.3,-41,-31.3,-51.9C-19.3,-62.9,-9.6,-80.7,2.1,-84C13.9,-87.3,27.8,-76.1,36.2,-63.5Z;
									M41.2,-63.5C54.8,-55.4,68.2,-46.3,76.4,-33.4C84.5,-20.5,87.5,-3.8,85,12.1C82.5,27.9,74.5,42.8,63.3,53.6C52,64.3,37.4,70.8,23.4,70.8C9.5,70.7,-3.7,64.1,-19.6,61.7C-35.5,59.3,-54.2,61.2,-61.7,53.1C-69.3,45,-65.8,27,-65.9,10.9C-65.9,-5.1,-69.5,-19.3,-64,-28.4C-58.5,-37.5,-44,-41.7,-31.8,-50.5C-19.6,-59.3,-9.8,-72.8,2,-75.9C13.8,-79,27.6,-71.7,41.2,-63.5Z;
									M40.8,-61.3C51.6,-56.6,58.1,-43.1,61,-29.8C64,-16.6,63.5,-3.8,64,10.9C64.5,25.5,66,42,59.4,53.9C52.8,65.8,38.3,73.2,24,73.6C9.8,74.1,-4.1,67.6,-15.6,60.7C-27,53.8,-36.1,46.5,-46.8,38.3C-57.5,30,-69.8,20.9,-71,10.4C-72.3,-0.2,-62.6,-12.1,-55.1,-23.8C-47.7,-35.6,-42.6,-47,-33.8,-52.6C-25,-58.1,-12.5,-57.8,1.3,-59.8C15,-61.7,30.1,-66,40.8,-61.3Z;
									M40.7,-64.9C49.2,-57.9,50,-40.5,57.4,-25.8C64.8,-11,78.9,1.2,77.1,10.8C75.3,20.5,57.7,27.6,45.2,35.4C32.6,43.2,25.1,51.6,14.7,58.5C4.3,65.4,-9,70.7,-22.8,70C-36.6,69.4,-50.8,62.9,-57.1,51.7C-63.3,40.5,-61.5,24.5,-63.8,9.1C-66.1,-6.3,-72.5,-21.2,-70.9,-35.5C-69.2,-49.9,-59.6,-63.8,-46.4,-68.6C-33.3,-73.4,-16.6,-69.1,-0.3,-68.7C16.1,-68.3,32.3,-71.8,40.7,-64.9Z"
								></animate>
							</path>
						</svg>
					</div>
					<div style={STYLES.blobGlow}>
						<svg
							width="100%"
							viewBox="0 0 200 200"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="#C4D3F0"
								transform="translate(100 100)"
							>
								<animate
									attributeName="d"
									dur="10000ms"
									repeatCount="indefinite"
									values="M40.7,-64.9C49.2,-57.9,50,-40.5,57.4,-25.8C64.8,-11,78.9,1.2,77.1,10.8C75.3,20.5,57.7,27.6,45.2,35.4C32.6,43.2,25.1,51.6,14.7,58.5C4.3,65.4,-9,70.7,-22.8,70C-36.6,69.4,-50.8,62.9,-57.1,51.7C-63.3,40.5,-61.5,24.5,-63.8,9.1C-66.1,-6.3,-72.5,-21.2,-70.9,-35.5C-69.2,-49.9,-59.6,-63.8,-46.4,-68.6C-33.3,-73.4,-16.6,-69.1,-0.3,-68.7C16.1,-68.3,32.3,-71.8,40.7,-64.9Z;
									M34.8,-55.8C44.3,-48.1,50.5,-37,60,-24.8C69.6,-12.7,82.6,0.5,85.7,15.7C88.8,31,82.2,48.2,70,58.6C57.8,69,40.1,72.6,23.5,75.3C6.9,78.1,-8.6,79.9,-20.3,74.2C-32.1,68.5,-40.1,55.1,-48.4,43.2C-56.7,31.4,-65.2,21,-67,9.6C-68.7,-1.9,-63.7,-14.4,-56.1,-23.3C-48.4,-32.3,-38.1,-37.8,-28.3,-45.3C-18.5,-52.8,-9.3,-62.3,1.7,-65C12.7,-67.6,25.4,-63.4,34.8,-55.8Z;
									M36.2,-63.5C44.7,-50.9,47.8,-37.1,57.1,-24C66.5,-10.8,82.1,1.6,79.9,11C77.8,20.4,57.9,26.7,44.3,33.3C30.6,39.9,23.2,46.8,13.2,53.8C3.2,60.8,-9.4,67.9,-21.9,67.5C-34.4,67.1,-46.8,59.2,-56.2,48.6C-65.6,38,-72,24.6,-74.1,10.6C-76.3,-3.5,-74.1,-18.2,-65.9,-27.6C-57.7,-36.9,-43.3,-41,-31.3,-51.9C-19.3,-62.9,-9.6,-80.7,2.1,-84C13.9,-87.3,27.8,-76.1,36.2,-63.5Z;
									M41.2,-63.5C54.8,-55.4,68.2,-46.3,76.4,-33.4C84.5,-20.5,87.5,-3.8,85,12.1C82.5,27.9,74.5,42.8,63.3,53.6C52,64.3,37.4,70.8,23.4,70.8C9.5,70.7,-3.7,64.1,-19.6,61.7C-35.5,59.3,-54.2,61.2,-61.7,53.1C-69.3,45,-65.8,27,-65.9,10.9C-65.9,-5.1,-69.5,-19.3,-64,-28.4C-58.5,-37.5,-44,-41.7,-31.8,-50.5C-19.6,-59.3,-9.8,-72.8,2,-75.9C13.8,-79,27.6,-71.7,41.2,-63.5Z;
									M40.8,-61.3C51.6,-56.6,58.1,-43.1,61,-29.8C64,-16.6,63.5,-3.8,64,10.9C64.5,25.5,66,42,59.4,53.9C52.8,65.8,38.3,73.2,24,73.6C9.8,74.1,-4.1,67.6,-15.6,60.7C-27,53.8,-36.1,46.5,-46.8,38.3C-57.5,30,-69.8,20.9,-71,10.4C-72.3,-0.2,-62.6,-12.1,-55.1,-23.8C-47.7,-35.6,-42.6,-47,-33.8,-52.6C-25,-58.1,-12.5,-57.8,1.3,-59.8C15,-61.7,30.1,-66,40.8,-61.3Z;
									M40.7,-64.9C49.2,-57.9,50,-40.5,57.4,-25.8C64.8,-11,78.9,1.2,77.1,10.8C75.3,20.5,57.7,27.6,45.2,35.4C32.6,43.2,25.1,51.6,14.7,58.5C4.3,65.4,-9,70.7,-22.8,70C-36.6,69.4,-50.8,62.9,-57.1,51.7C-63.3,40.5,-61.5,24.5,-63.8,9.1C-66.1,-6.3,-72.5,-21.2,-70.9,-35.5C-69.2,-49.9,-59.6,-63.8,-46.4,-68.6C-33.3,-73.4,-16.6,-69.1,-0.3,-68.7C16.1,-68.3,32.3,-71.8,40.7,-64.9Z"
								></animate>
							</path>
						</svg>
					</div>
				</div>
				<div style={STYLES.text}>
					<SmallText>Hello!</SmallText>
					<LargeText>I am Rui Yan</LargeText>
					<SmallText>Software Developer</SmallText>
					<br />
					<br />
					<Subtitle>Welcome to my website!</Subtitle>
				</div>
			</Container>
		</>
	);
}

export default HeroSection;
