import { Typography, styled, Container, Grid, Chip, useMediaQuery } from '@mui/material';
import React from 'react';

// import Swiper and modules styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectFade, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/projectSection.css';

import StyledSection from './StyledSection';

import { projects } from '../data/projects.js';

const CustomSlide = ({ details }) => {
	const CustomSlideContainer = styled('div')(({ theme }) => ({
		height: '100%',
		width: '100%',
		textAlign: 'left',
	}));
	const breakpoints = {
		isSmallest: useMediaQuery('(max-height: 680px)'),
		isNormalMobile: useMediaQuery('(max-height: 800px)'),
		isTabletLaptop: useMediaQuery('(min-height: 856px)'),
	};

	return (
		<CustomSlideContainer className="custom-slide">
			<Container sx={{ height: '100%', width: '90%' }}>
				<Grid
					container
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100%',
					}}
					padding={2}
					spacing={0}
				>
					<Grid
						item
						xs={12}
						sm={12}
						md={6}
					>
						<Swiper
							className="mySwiper2 swiper-v"
							direction={'vertical'}
							pagination={{
								clickable: true,
							}}
							mousewheel={true}
							modules={[Mousewheel, Pagination]}
						>
							{details.images.map((image) => (
								<SwiperSlide>{image}</SwiperSlide>
							))}
						</Swiper>
					</Grid>
					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						sx={{}}
					>
						<Typography
							variant="h6"
							sx={{ marginTop: '10px' }}
						>
							{details.projectTitle}
						</Typography>
						<div>
							{details.programmingSkills.map((skill, index) => (
								<Chip
									key={index}
									label={skill}
									size="small"
								/>
							))}
						</div>
						<Typography
							variant="caption"
							component="div"
							sx={{
								marginTop: '10px',
								overflowY: 'auto',
								height: '25vh',
							}}
						>
							{details.description}
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</CustomSlideContainer>
	);
};

const CarouselProject = () => {
	return (
		<Swiper
			pagination={{
				type: 'fraction',
				clickable: true,
			}}
			slidesPerView={'auto'}
			centeredSlides={true}
			navigation={true}
			loop={true}
			effect={'fade'}
			modules={[EffectFade, Navigation, Pagination]}
			className="mySwiper swiper-h"
		>
			{projects.map((element) => (
				<SwiperSlide>
					<CustomSlide details={element}></CustomSlide>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

function ProjectSection({ title, isAlternate }) {
	return (
		<StyledSection
			title={title}
			isAlternate={isAlternate}
			sx={{ height: '100%' }}
		>
			<div style={{ height: '100%' }}>
				<CarouselProject />
			</div>
		</StyledSection>
	);
}

export default ProjectSection;
