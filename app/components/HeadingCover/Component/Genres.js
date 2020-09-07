import React ,{useMemo,useEffect} from 'react';
import { FormattedMessage } from 'react-intl';
import  messages  from '../messages';

import {GenresStyle} from '../styles';



const Genres = ({genresUtility,genres})=>
{
    const genersAll = useMemo(()=>{
    const result =[];
    genres && genres.length > 0 && genres.forEach(genresId => {
        const foundGenres = genresUtility.filter(item => item.id === genresId);
        if (foundGenres.length !==0 ) result.push(foundGenres[0]);
    });
    return result;
},[Object.keys(genresUtility).length,genres]);
    

useEffect(() => {

  }, [genersAll]);

    return(
        <GenresStyle>       
      <span>{genersAll.map((genr,index) =>(
       <span key={`genr_${index}`}> {(index ? ', #':'#') + genr.name}</span>
        
    ))}</span>


       </GenresStyle>

    )
}
export default Genres;