import React from 'react';

import { IMAGE_SIZES } from '../../constants';

import {ContainerWrapper,Container,EpisodeCover,EpisodeDescription,EpisodeTitle,PlayIcon,Image} from './styles';

const EpisodeSeries = ({ episodes = [] })=> {

  // const imageSize = '216x331'
 
  return (
   <ContainerWrapper>

{episodes.map((episode, i) => (
        <Container key={i}>
          <EpisodeCover>
            <Image>
              <img
                src={`${episode.poster_path}?size=${
                  IMAGE_SIZES.SERIE_IMAGE_SIZE
                }`}
              />
      
            </Image>

            <PlayIcon>
              <span>
                <i className="fa fa-play-circle" aria-hidden="true" />
              </span>
            </PlayIcon>
          </EpisodeCover>

          <EpisodeDescription>
            <EpisodeTitle>{episode.title_fa}</EpisodeTitle>
          </EpisodeDescription>
        </Container>
      ))}
    </ContainerWrapper>
  );
};

export default EpisodeSeries;