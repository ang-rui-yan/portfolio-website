import { Typography, styled, Container, Grid } from '@mui/material';
import React from 'react';

// import Swiper and modules styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/projectSection.css';

import StyledSection from './StyledSection';

import { projects } from '../data/projects.js';

/* PROJECT SECTION
Currently, there is a switch to use between 
1. carousel
2. tiles

Decided to use tiles instead but didnt want to ditch the carousel which is still uncompleted too.

*/

// Not use carousel for now
const CustomSlide = ({ className, details }) => {
	const CustomSlideContainer = styled('div')(({ theme }) => ({
		height: '100%',
		width: '100%',
		// display: 'flex',
		// justifyContent: 'center',
		// alignItems: 'center',
	}));
	return (
		<CustomSlideContainer className={className}>
			<Container>
				<Grid container>
					<Grid
						item
						xs={12}
					>
						<Typography variant="h6">{details.projectTitle}</Typography>
					</Grid>
					<Grid
						item
						xs={12}
					>
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
			spaceBetween={30}
			loop={true}
			modules={[Pagination, Navigation]}
			className="mySwiper"
		>
			{projects.map((element) => (
				<SwiperSlide>
					<CustomSlide
						className="custom-slide"
						details={element}
					></CustomSlide>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

// Use tiles instead
const TileProject = () => {
	return <div>Tiles</div>;
};

function ProjectSection({ title, isAlternate }) {
	let isCarousel = false;
	return (
		<StyledSection
			title={title}
			isAlternate={isAlternate}
			sx={{ height: '100%' }}
		>
			<div style={{ height: '100%' }}>
				{isCarousel ? <CarouselProject /> : <TileProject />}
			</div>
		</StyledSection>
	);
}

export default ProjectSection;
