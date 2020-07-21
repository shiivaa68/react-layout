import React, { useEffect } from 'react';

import MovieSuggestions from 'containers/MovieSuggestions';
import HeadingCover from 'components/HeadingCover';
import MovieDetail from 'components/MovieDetail';
import Casts from 'components/Casts';
import Comments from 'components/Comments';
import ScreenShots from 'components/ScreenShots';

import { useSelector } from 'react-redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import MoviesPageReducer from './redux/reducer';
import moviesPageSaga from './redux/saga';
import { getMoviesAction } from './redux/actions';
import initialState from './redux/initialState';

import { MoviesContainer } from './styles';

const MoviesPageKeyOnRedux = 'MoviesPage';

const MoviesPage = ({ match }) => {
  useInjectReducer({ key: MoviesPageKeyOnRedux, reducer: MoviesPageReducer });
  useInjectSaga({ key: MoviesPageKeyOnRedux, saga: moviesPageSaga });

  const [getMoviesPage] = useBindDispatch([getMoviesAction]);

  const { loading, error, data = [] } = useSelector(state => state[MoviesPageKeyOnRedux] || initialState);
  const { rols = [] } = useSelector(state => state.global);
  const { languages = [] } = useSelector(state => state.global);
  const {agerange =[] } = useSelector(state=>state.global);
  const {genres =[]} = useSelector(state =>state.global );
  const {country =[]} = useSelector(state =>state.global );


  useEffect(() => {
    const id = match.params.movieId;
    getMoviesPage({ id });
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  // useEffect(() => {
  //   console.log({ data });
  // }, [data]);

  // useEffect(() => {
  //   console.log({ languages },'DATA HAST INJA MOVIEPAGE');
  // }, [languages]);

  return (
    <MoviesContainer>
      <HeadingCover type="MOVIE" {...data} languages={languages} agerange={agerange} genresUtility={genres} countryUtility={country} />
      <ScreenShots {...data} />
      {/* <MovieDetail /> */}
      <Casts type="MOVIE" casts={data.casts || []} rols={rols} />
      <MovieSuggestions type="MOVIE" {...data}  movieId={match.params.movieId} />
      {/* <Comments /> */}
    </MoviesContainer>
  );
};

export default MoviesPage;