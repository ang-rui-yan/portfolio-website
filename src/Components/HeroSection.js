import { styled, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const STYLES = {
	container: {
		position: 'relative',
		height: '100vh',
	},
	hero: {
		position: 'absolute',
		left: '50%',
		top: '55%',
		transform: 'translate(-50%, -50%)',
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
				<svg
					style={STYLES.hero}
					width="90%"
					height="60%"
					viewBox="0 0 311 309"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M139.562 0.0933559C175.85 -1.56518 206.743 19.1071 233.582 43.6234C269.66 76.5789 316.601 109.563 312.781 158.319C308.586 211.861 262.732 251.2 215.349 276.342C165.213 302.945 103.692 323.89 54.6735 295.273C7.88602 267.959 -0.228345 204.865 0.00480436 150.624C0.175947 110.809 28.6705 80.9294 55.7202 51.7527C79.2105 26.4155 105.077 1.66955 139.562 0.0933559Z"
						fill="#C4D3F0"
					/>
				</svg>
				<svg
					style={STYLES.hero}
					width="90%"
					height="60%"
					viewBox="0 0 282 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M135.152 15.8877C177.402 13.5742 225.977 -16.2621 257.209 12.2845C288.486 40.8728 262.643 92.0109 264.737 134.331C267.046 181.003 298.846 232.386 269.915 269.083C240.314 306.628 182.945 300.066 135.152 298.696C89.2364 297.38 33.1701 299.929 7.89835 261.575C-16.6297 224.349 23.4951 178.784 26.8523 134.331C29.7068 96.5366 0.191394 52.9303 25.7688 24.9571C51.4328 -3.11075 97.1751 17.9671 135.152 15.8877Z"
						fill="#DBE2EF"
					/>
				</svg>
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
