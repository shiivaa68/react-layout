import React, { useEffect } from 'react';

import CommentMovie from 'components/CommentMovie';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import HeadingCover from 'components/HeadingCover';
import Casts from 'components/Casts';
import ScreenShots from 'components/ScreenShots';
import MovieSuggestions from 'containers/MovieSuggestions';
import { Waypoint } from 'react-waypoint';
import { EnterComment } from './components';
import { Helmet } from 'react-helmet';
import LoadingIndicator from 'components/LoadingIndicator';
import { MoviePageContext } from './context';
import Img from 'react-cool-img';
import MoviePageManager from './MoviePageManager';
import SEND from 'images/send.svg';
import {
  MoviesContainer,
  SubTitle,
  MainWrapperComment,
  WayPointArea,
} from './styles';

const MoviesPage = ({ match, history }) => {
  const {
    data: {
      loading,
      error,
      data,
      data_movie,
      data_movie_favarite,
      isMobile,
      comment_movie,
      rols,
      languages,
      agerange,
      genres,
      country,
      activeCommentIdForReply,
    },
    actions,
  } = MoviePageManager({ match, history });

  return (
    <MoviePageContext.Provider
      value={{ data: { data, activeCommentIdForReply }, actions }}
    >
      <MoviesContainer>
        <Helmet>
          <title>{data.title_fa}</title>
          <meta name="description" content={'فیلم ' + data.title_fa} />
        </Helmet>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <>
            <HeadingCover
              history={history}
              data_movie={data_movie}
              isMobile={isMobile}
              type="MOVIE"
              {...data}
              languages={languages}
              agerange={agerange}
              genresUtility={genres}
              countryUtility={country}
              movieId={match.params.movieId}
              data_movie_favarite={data_movie_favarite}
            />
            <ScreenShots {...data} />

            <Casts type="MOVIE" casts={data.casts || []} rols={rols} />
            <MovieSuggestions
              type="MOVIE"
              {...data}
              movieId={match.params.movieId}
            />
            <MainWrapperComment>
              <SubTitle>
                <FormattedMessage {...messages.commentMovie} />
              </SubTitle>
              <EnterComment />
              {comment_movie.length > 0 &&
                comment_movie.map(comment => (
                  <CommentMovie key={comment.id} {...comment} />
                ))}

              <WayPointArea>
                {/* <Waypoint onEnter={handleNextPage} /> */}
              </WayPointArea>
            </MainWrapperComment>
          </>
        )}
      </MoviesContainer>
    </MoviePageContext.Provider>
  );
};

export default MoviesPage;
