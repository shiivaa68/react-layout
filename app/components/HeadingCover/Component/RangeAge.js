import React from 'react';
import {RangeAgeStyle} from '../styles';
import { useEffect } from 'react';
import { useState } from 'react';
import Img from 'react-cool-img';
import AGE_WHITE from 'images/age.svg';
import AGE_BLACK from 'images/age-black.svg';

const axios = require('axios');
const RangeAge = ({age_range,agerange})=>{
    const [icon, setIcon] = useState('')
    const [symbol, setSymbol] = useState(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.61 80.28"><defs><style>.cls-1{fill:#575756;}.cls-2{fill:#28b56b;}.cls-3{fill:#ffe33e;}.cls-4{font-size:25px;fill:#fff;font-family:Vazir-Medium-FD-WOL, Vazir FD-WOL;}</style></defs><title>Asset 3age4</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M1,20h96a0,0,0,0,1,0,0V74a6.28,6.28,0,0,1-6.28,6.28H7.31A6.28,6.28,0,0,1,1,74V20A0,0,0,0,1,1,20Z"/><path class="cls-1" d="M96.6,0,82.72,1.3l-.38,0v0L10.23,8.11l-.5,0v0L0,9.07,1,19.78l96.6-9.08ZM38.28,6.48l7.82-.73-4,9.16-7.82.73ZM23.89,16.62l-8.13.77,4-9.16,8.13-.77ZM56.54,4.77,64,4.06l-4,9.16-7.49.71ZM74.47,3.08l7.41-.69-3.95,9.16-7.41.69ZM1.09,10l8.18-.77L5.32,18.37l-3.41.32Zm87.29.59,4-9.16,3.37-.32.82,8.71Z"/><rect class="cls-2" x="8.64" y="28.88" width="80.43" height="6.89"/><rect class="cls-3" x="8.84" y="66.09" width="80.43" height="6.89"/><text class="cls-4" transform="translate(36.86 59.72)">18</text></g></g></svg>`)
    const [symbol2, setSymbol2] = useState(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.61 80.28"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#28b56b;}.cls-3{fill:#ffe33e;}.cls-4{font-size:25px;fill:#606060;font-family:Vazir-Medium-FD-WOL, Vazir FD-WOL;}</style></defs><title>Asset 1age3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M1,20h96a0,0,0,0,1,0,0V74a6.28,6.28,0,0,1-6.28,6.28H7.31A6.28,6.28,0,0,1,1,74V20A0,0,0,0,1,1,20Z"/><path class="cls-1" d="M96.6,0,82.72,1.3l-.38,0v0L10.23,8.11l-.5,0v0L0,9.07,1,19.78l96.6-9.08ZM38.28,6.48l7.82-.73-4,9.16-7.82.73ZM23.89,16.62l-8.13.77,4-9.16,8.13-.77ZM56.54,4.77,64,4.06l-4,9.16-7.49.71ZM74.47,3.08l7.41-.69-3.95,9.16-7.41.69ZM1.09,10l8.18-.77L5.32,18.37l-3.41.32Zm87.29.59,4-9.16,3.37-.32.82,8.71Z"/><rect class="cls-2" x="8.64" y="28.88" width="80.43" height="6.89"/><rect class="cls-3" x="8.84" y="66.09" width="80.43" height="6.89"/><text class="cls-4" transform="translate(36.86 59.72)">18</text></g></g></svg>`)

    const appropriateAge = agerange && agerange.length >0 && agerange.find(age =>age.id === age_range );
    useEffect(() => {
      if (appropriateAge) {
        // axios.get(appropriateAge.symbol).then(res=> res.data ? setSymbol(res.data): '')
        // axios.get(appropriateAge.icon).then(res=> res.data ? setIcon(res.data): '')
      }
    }, [appropriateAge])

    return(
        <RangeAgeStyle>
          <img src={AGE_WHITE}/>
          <img src={AGE_BLACK}/>
         {/* <div dangerouslySetInnerHTML={{__html: icon}} />   */}
        </RangeAgeStyle>

    )
}
export default RangeAge;