import React from 'react';
import { FormattedMessage } from 'react-intl'
import messages from './messages';
import { MovieItem } from 'components/kit';

import {
    CrewWrapper,ContainerCrew,WrapperImg,DescriptionCrew,Title,TitleCrew,Description,WrapperSuggest,ContainerFilm,ContainerSeries,
} from './styles';

const Crew = ({ data }) => {
    console.log({data})
  return (
     <CrewWrapper>
        <ContainerCrew>
         <WrapperImg>
         <img src={data.profile_picture} />
         </WrapperImg>
         <DescriptionCrew>
           <TitleCrew>{data.fullname_fa}</TitleCrew>
             <Description>
             {data.brief}
             </Description>
         </DescriptionCrew>
         </ContainerCrew>
            <WrapperSuggest>
            <Title>
            <FormattedMessage {...messages.movies} />
            </Title>
            <ContainerFilm>
              {data && data.movies && data.movies.length > 0 &&
              data.movies.map(item => 
              <MovieItem key={item.id} {...item} />)}
                </ContainerFilm>
                <Title>
                <FormattedMessage {...messages.series} />
                </Title>
                <ContainerSeries>
                {data && data.series && data.series.length > 0 &&
                 data.series.map(item => 
              <MovieItem key={item.id} {...item} />) }
            </ContainerSeries>
            </WrapperSuggest>
    
    </CrewWrapper>
  );
};

export default Crew;
