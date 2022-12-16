const styles = {
	variant0: {
		position: 'absolute',
		bottom: '-1px',
		left: '0',
		width: '100%',
		overflow: 'hidden',
		lineHeight: '0',
		transform: 'rotate(180deg)',
	},
	variant0Svg: {
		position: 'relative',
		display: 'block',
		width: 'calc(138% + 1.3px)',
		height: '10vh',
	},

	variant1: {
		position: 'absolute',
		bottom: '0',
		left: '0',
		width: '100%',
		overflow: 'hidden',
		lineHeight: '0',
		transform: 'rotate(180deg)',
	},
	variant1Svg: {
		position: 'relative',
		display: 'block',
		width: 'calc(260% + 1.3px)',
		height: '10vh',
	},
	variant2: {
		position: 'absolute',
		bottom: '0',
		left: '0',
		width: '100%',
		overflow: 'hidden',
		lineHeight: '0',
		transform: 'rotate(180deg)',
	},
	variant2Svg: {
		position: 'relative',
		display: 'block',
		width: 'calc(400% + 1.3px)',
		height: '7vh',
		transform: 'rotateY(180deg)',
	},
	variant3: {
		position: 'absolute',
		bottom: '0',
		left: '0',
		width: '100%',
		overflow: 'hidden',
		lineHeight: '0',
		transform: 'rotate(180deg)',
	},
	variant3Svg: {
		position: 'relative',
		display: 'block',
		width: 'calc(100% + 1.3px)',
		height: '10vh',
	},
	shapeFill: {
		fill: '#ffffff',
	},
	shapeFillAlternate: {
		fill: '#122e4f',
	},
};

const CurveComponent = ({ variant, isAlternate }) => {
	switch (variant) {
		case 0:
			return (
				<div style={{ position: 'relative' }}>
					<div style={styles.variant0}>
						<svg
							style={styles.variant0Svg}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1200 120"
							preserveAspectRatio="none"
						>
							<path
								d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
								style={isAlternate ? styles.shapeFill : styles.shapeFillAlternate}
							></path>
						</svg>
					</div>
				</div>
			);

		case 1:
			return (
				<div style={{ position: 'relative' }}>
					<div style={styles.variant1}>
						<svg
							style={styles.variant1Svg}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1200 120"
							preserveAspectRatio="none"
						>
							<path
								d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
								style={isAlternate ? styles.shapeFill : styles.shapeFillAlternate}
							></path>
						</svg>
					</div>
				</div>
			);

		case 2:
			return (
				<div style={{ position: 'relative' }}>
					<div style={styles.variant2}>
						<svg
							style={styles.variant2Svg}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1200 120"
							preserveAspectRatio="none"
						>
							<path
								d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
								style={isAlternate ? styles.shapeFill : styles.shapeFillAlternate}
							></path>
						</svg>
					</div>
				</div>
			);
		case 3:
			return (
				<div style={{ position: 'relative' }}>
					<div style={styles.variant3}>
						<svg
							style={styles.variant3Svg}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1200 120"
							preserveAspectRatio="none"
						>
							<path
								d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
								style={isAlternate ? styles.shapeFill : styles.shapeFillAlternate}
							></path>
						</svg>
					</div>
				</div>
			);
		default:
			return;
	}
};
export default CurveComponent;
