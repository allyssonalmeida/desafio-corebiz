import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import BannerItem from '../../assets/banner.png';

const Banner = () => {
  return (
    <Splide className="banner"
      options={ {
        arrows: false
      } }
    >
      <SplideSlide>
        <img src={BannerItem} alt="Banner"/>
        <div className="slider-caption">
          <p>Olá, o que você está buscando?</p>
          <h1>Criar ou migrar seu<br />e-commerce?</h1>
        </div>
      </SplideSlide>
      <SplideSlide>
        <img src={BannerItem} alt="Banner"/>
        <div className="slider-caption">
          <p>Olá, o que você está buscando?</p>
          <h1>Criar ou migrar seu<br />e-commerce?</h1>
        </div>
      </SplideSlide>
    </Splide>
  )
}

export default Banner
