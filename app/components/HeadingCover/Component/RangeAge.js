import React from 'react';
import {RangeAgeStyle} from '../styles';
import { useEffect } from 'react';
import { useState } from 'react';
import Img from 'react-cool-img';

const axios = require('axios');
const RangeAge = ({age_range,agerange})=>{
    const [icon, setIcon] = useState('')
    const [symbol, setSymbol] = useState('')

    const appropriateAge = agerange && agerange.length >0 && agerange.find(age =>age.id === age_range );
    useEffect(() => {
      if (appropriateAge) {
        axios.get(appropriateAge.symbol).then(res=> res.data ? setSymbol(res.data): '')
        axios.get(appropriateAge.icon).then(res=> res.data ? setIcon(res.data): '')
      }
    }, [appropriateAge])

    return(
        <RangeAgeStyle>
          <div dangerouslySetInnerHTML={{__html: symbol}} />
          <div dangerouslySetInnerHTML={{__html: icon}} />  
        </RangeAgeStyle>

    )
}
export default RangeAge;