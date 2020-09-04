import produce from 'immer';
import initialState from './initialState';
import { ERROR, LOADING, UPDATE_COMMENT_MOVIES } from './constants';

const CommentMoviePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ERROR:
        draft.error = action.payload.error.message;
        return draft;

      case LOADING:
        draft.loading = action.payload.loadingStatus;
        return draft;

      case UPDATE_COMMENT_MOVIES:
        draft.comment_movie = action.payload;
        return draft;
    }
  });

export default CommentMoviePageReducer;