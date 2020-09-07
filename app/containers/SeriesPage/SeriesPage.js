
import React, { useEffect } from 'react';
import CommentSeries from 'components/CommentSeries';
import SerieSuggestions from 'containers/SerieSuggestions';
import HeadingCover from 'components/HeadingCover';
import Casts from 'components/Casts';
import EpisodeSeries from 'components/EpisodeSeries';
import { SeriesPageContext } from './context';
import { Helmet } from 'react-helmet';
import LoadingIndicator from 'components/LoadingIndicator';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { SeriesContainer,SubTitle ,MainWrapperComment} from './styles';
import SeriesPageManager from './SeriesPageManager';
import {
  EnterComment,
} from './components';

const SeriesPage = ({ match, history }) => {
const{ 
  data: {
    loading,
    error,
    data,
    error_comment,
     loading_send_comment,
    data_favarite_series,
    data_awards,
    isMobile,
    activeSeasonId,
    comment_series,
    handleSetActiveSeason,
    activeSeasonEpisodes,
    rols,
    languages,
    agerange,
    genres,
    country,
  },
  actions,
} = SeriesPageManager({ match, history });

  return (
    <SeriesPageContext.Provider value={{ data, actions }}>
    <SeriesContainer>
      <Helmet>
        <title>{data.title_fa}</title>
        <meta name="description" content={'سریال' + data.title_fa} />
      </Helmet>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <HeadingCover
            activeSeasonId={activeSeasonId}
            handleSetActiveSeason={handleSetActiveSeason}
            data_awards={data_awards}
            isMobile={isMobile}
            type="SERIES"
            languages={languages}
            agerange={agerange}
            genresUtility={genres}
            countryUtility={country}
            {...data}
            data_favarite_series={data_favarite_series}
          />
          <EpisodeSeries history={history} episodes={activeSeasonEpisodes} />
          <Casts type="SERIES" casts={data.casts || []} rols={rols} />
          <SerieSuggestions
            type="SERIES"
            {...data}
            serieId={match.params.serieId}
          />
           <MainWrapperComment>
            <SubTitle>
              <FormattedMessage {...messages.commentMovie} />
            </SubTitle>
            <EnterComment/>
               {comment_series.length > 0 &&
                comment_series.map(comment => (
                <CommentSeries key={comment.id} {...comment} />
              ))}
         </MainWrapperComment>
        </>
      )}
    </SeriesContainer>
    </SeriesPageContext.Provider>
  );
};

export default SeriesPage;
