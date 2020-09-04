import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';

import { GET_COMMENT_MOVIES } from './constants';
import { loadingAction, errorAction, updateCommentMoviesAction } from './actions';

function* getCommentMoviesWorker({ payload: { movieId, options } }) {
  const url = apiEndpoints.getCommentMovies(movieId, options);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: result => updateCommentMoviesAction(result),
    failure: error => errorAction(error),
  };

  yield requestCall({ url, method, actions });
}

export default function* CommentMoviesPageSaga() {
  yield all([takeLatest(GET_COMMENT_MOVIES, getCommentMoviesWorker)]);
}

