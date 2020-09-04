import React from 'react';

import { IMAGE_SIZES } from '../../constants';
import { FormattedMessage } from 'react-intl';
import messages from './messages'
import {ContainerWrapper,Container,EpisodeCover,EpisodeDescription,EpisodeTitle,PlayIcon,Image} from './styles';
import Img from 'react-cool-img';

const EpisodeSeries = ({ episodes = [] })=> {

  // const imageSize = '216x331'
 
  return (
   <ContainerWrapper>

{episodes.map((episode, i) => (
        <Container key={i}>
          <EpisodeCover>
            <Image>
              <Img
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
            <EpisodeTitle><FormattedMessage id={messages.episode.id}
            defaultMessage={messages.episode.defaultMessage + (i + 1)} />
            </EpisodeTitle>
          </EpisodeDescription>
        </Container>
      ))}
    </ContainerWrapper>
  );
};

export default EpisodeSeries;