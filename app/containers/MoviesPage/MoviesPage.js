import React, { useEffect } from 'react';

import HeadingCover from 'components/HeadingCover';
import Casts from 'components/Casts';
import ScreenShots from 'components/ScreenShots';
import MovieSuggestions from 'containers/MovieSuggestions';
import CommentMovie from 'containers/CommentMovie';
import { Helmet } from 'react-helmet';
import LoadingIndicator from 'components/LoadingIndicator';
import { MoviePageContext } from './context';

import MoviePageManager from './MoviePageManager';

import { MoviesContainer } from './styles';

const MoviesPage = ({ match, history }) => {
  const {
    data: {
      loading,
      error,
      data,
      data_movie,
      data_movie_favarite,
      isMobile,
      rols,
      languages,
      agerange,
      genres,
      country,
    },
    actions,
  } = MoviePageManager({ match, history });

  return (
    <MoviePageContext.Provider value={{ data, actions }}>
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
            <CommentMovie />
          </>
        )}
      </MoviesContainer>
    </MoviePageContext.Provider>
  );
};

export default MoviesPage;
