import React from 'react';



import {RangeAgeStyle} from '../styles';

const RangeAge = ({age_range,agerange})=>{


  const appropriateAge = agerange && agerange.length >0 && agerange.find(age =>age.id === age_range );
    return(
        <RangeAgeStyle>

          <img src={appropriateAge&&appropriateAge.symbol} />
          <img src={appropriateAge &&appropriateAge.icon}/>    
        </RangeAgeStyle>

    )
}
export default RangeAge;