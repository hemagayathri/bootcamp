import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import JobCard from './JobCard';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function CarouselComponent(props) {
  return(
    
    <Carousel responsive={responsive}>
      <JobCard title="Java Developer" description="Need Java Developer with 10+ years of experience"></JobCard>
        <JobCard title="Java Developer Sr" description="Need Java Developer with 10+ years of experience"></JobCard>
        <JobCard title="Dotnet Developer" description="Need Java Developer with 10+ years of experience"></JobCard>
        <JobCard title="SQL Developer" description="Need Java Developer with 10+ years of experience"></JobCard>
    </Carousel>
  );
}

export default CarouselComponent;