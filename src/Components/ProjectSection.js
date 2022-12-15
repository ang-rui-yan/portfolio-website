import { Typography, styled, Container, Grid } from '@mui/material';
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
		// display: 'flex',
		// justifyContent: 'center',
		// alignItems: 'center',
	}));
	return (
		<CustomSlideContainer className="custom-slide">
			<Container sx={{ height: '100%', width: '90%' }}>
				<Grid
					container
					sx={{
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
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
						sx={{ padding: '20px' }}
					>
						<Typography
							variant="h6"
							sx={{ margin: '10px auto' }}
						>
							{details.projectTitle}
						</Typography>
						<Typography component="div">{details.description}</Typography>
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
