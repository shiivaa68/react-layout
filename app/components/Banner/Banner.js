import React from 'react';
import Slider from 'react-slick';
import Card from '../kit';

import { BannerSection } from './styles';

const Banner = ({ style, items = [] }) => {
  const { type } = style;

  let slidesToShow = 0;
  let slidesToScroll = 0;
  switch (type) {
    case 'full':
      slidesToShow = 1;
      slidesToScroll = 1;
      break;

    case 'long':
        slidesToShow=4;
        slidesToScroll=4;
          
    case 'item':
      slidesToShow = 4;
      slidesToScroll = 4;
      break;
      
     case 'quad':
         slidesToShow = 4;
         slidesToScroll = 4;
         beark; 

    default:
      slidesToShow = 4;
      slidesToScroll = 4;
      break;
  }
  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    rtl: true,
  };

  return (
   
     <BannerSection>
      {items.length > 0 && (
        <Slider {...setting}>
          {items.map(item => (
            <img key={item.id} src={item.image_path} />
          ))}
        </Slider>
      )}
    </BannerSection>
   
    
  );
};

export default Banner;
