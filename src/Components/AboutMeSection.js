import { Button, Typography, useMediaQuery } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import React from "react";

function AboutMeSection() {
	const breakpoints = {
		isXs: useMediaQuery("(max-width: 640px)"),
		isSm: useMediaQuery("(min-width: 641px) and (max-width: 768px)"),
		isMd: useMediaQuery("(min-width: 769px) and (max-width: 1024px)"),
		isLg: useMediaQuery("(min-width: 1025px)"),
		active: "xs",
	};
	return (
		<>
			<div
				style={{
					padding: "20px",
					paddingTop: "40px",
					color: "white",
				}}
			>
				<Typography>About Me</Typography>

				<div
					style={{
						textAlign: "center",
						alignItems: "center",
					}}
				>
					<svg
						style={{ marginTop: 5, marginBottom: 10 }}
						width={
							breakpoints.isXs || breakpoints.isSm ? "55%" : "20%"
						}
						height="70%"
						viewBox="0 0 161 161"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="-0.308594"
							y="12.5919"
							width="149.194"
							height="149.194"
							rx="8"
							transform="rotate(-5 -0.308594 12.5919)"
							fill="#A0B7E2"
						/>
						<rect
							x="5.9082"
							y="5.80646"
							width="149.194"
							height="149.194"
							rx="8"
							fill="#DBE2EF"
						/>
					</svg>
					<Typography
						className="poppinFont"
						variant="subtitle2"
						component="div"
						style={{
							margin: "auto",
							marginBottom:
								breakpoints.isXs || breakpoints.isSm ? 20 : 50,
							width:
								breakpoints.isXs || breakpoints.isSm
									? "90%"
									: "60%",
						}}
					>
						I am currently pursuing a degree in Computer Science in
						Singapore Management University (SMU).
					</Typography>
					<Typography
						className="poppinFont"
						variant="subtitle2"
						component="div"
						style={{
							margin: "auto",
							marginBottom:
								breakpoints.isXs || breakpoints.isSm ? 20 : 50,
							width:
								breakpoints.isXs || breakpoints.isSm
									? "90%"
									: "60%",
						}}
					>
						I enjoy programming and I would love to work in a team.
						Outside of my programming bubble, I enjoy playing the
						flute, reading web novels and doing martial arts.
					</Typography>
					<Button
						variant="contained"
						style={{ backgroundColor: "white", color: "black" }}
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
