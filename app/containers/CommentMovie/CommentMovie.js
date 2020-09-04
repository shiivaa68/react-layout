import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Comments from 'components/Comments';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import globalConfigs from 'utils/globalConfigs';
import LoadingIndicator from 'components/LoadingIndicator';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import { getCommentMoviesAction } from './redux/actions';

import CommentMoviePageReducer from './redux/reducer';
import CommentMoviesPageSaga from './redux/saga';
import initialState from './redux/initialState';
import { withRouter } from 'react-router-dom';

const CommentMovieFlowKeyOnRedux = 'CommentMovie';

import { SubTitle } from './styles';

const CommentMovie = ({ match }) => {
  /** Injectors */
  useInjectReducer({
    key: CommentMovieFlowKeyOnRedux,
    reducer: CommentMoviePageReducer,
  });
  useInjectSaga({
    key: CommentMovieFlowKeyOnRedux,
    saga: CommentMoviesPageSaga,
  });

  /** local States */

  /** Redux Data */
  const { comment_movie, loading, error } = useSelector(
    state => state[CommentMovieFlowKeyOnRedux] || initialState,
  );

  /** bounded redux actions */
  const [getCommentMovies] = useBindDispatch([getCommentMoviesAction]);

  useEffect(() => {
    const {
      params: { movieId },
    } = match;
    const { pageLimit } = globalConfigs;

    const options = {
      limit: pageLimit,
    };

    getCommentMovies({ movieId, options });
  }, []);

  console.log(comment_movie);

  /** Handlers */

  // const handleEnterPhoneNumber = useCallback(({ phoneNumber }) => {
  //   let makePhoneValid = null;

  //   if (phoneNumber[0] !== '0') makePhoneValid = `0${phoneNumber}`;
  //   else makePhoneValid = phoneNumber;

  //   enterPhoneNumber({ phoneNumber: makePhoneValid });
  //   setMobile(makePhoneValid);
  // }, []);

  return (
    <section>
      <SubTitle>
        <FormattedMessage {...messages.commentMovie} />
      </SubTitle>

      {comment_movie.length > 0 &&
        comment_movie.map(comment => (
          <Comments key={comment.id} {...comment} />
        ))}
    </section>
  );
};

export default withRouter(CommentMovie);
