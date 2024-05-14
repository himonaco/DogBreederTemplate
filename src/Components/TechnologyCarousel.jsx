import React from 'react';
import {
  CCarousel,
  CCarouselItem,
  CImage
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import './TechnologyCarousel.css';


import ReactImg from '../assets/react.png'
import VueImg from '../assets/vue.png';
import AngularImg from '../assets/angular.png';

const TechnologyCarousel = () => {
  return (
    <CCarousel className="carousel-container" controls transition="crossfade">
      <CCarouselItem>
        <CImage className="d-block w-100" src={ReactImg} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={VueImg} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  );
};

export default TechnologyCarousel;
