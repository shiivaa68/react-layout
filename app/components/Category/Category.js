import React from 'react';
import Slider from 'react-slick';

import { CategorySection } from './styles';

const Category = ({ type, items = [] }) => {

  let slidesToShow = 0;
  let slidesToScroll = 0;

  switch (type) {
    case 'categorry':
      slidesToShow = 7;
      slidesToScroll = 7;
      break;

    default:
      slidesToShow =7;
      slidesToScroll = 7;
      break;
  }

  const setting = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };

  return (
    <CategorySection>
     
      <div>
      {items.length > 0 && (
        <Slider {...setting}>
          {items.map(item => (
            <img  key={item.id} src={item.poster_path} />
             
          ))}
        </Slider>
      )}
      {/* <p>{item.title_fa}</p> */}
      </div>
   
    </CategorySection>
  );
};

export default Category;
