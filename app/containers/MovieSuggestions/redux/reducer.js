import produce from 'immer';
import initialState from './initialState';
import { ERROR, LOADING, UPDATE_SUGGESTED_MOVIES } from './constants';

const SuggestedMoviePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ERROR:
        draft.error = action.payload.error.message;
        return draft;

      case LOADING:
        draft.loading = action.payload.loadingStatus;
        return draft;

      case UPDATE_SUGGESTED_MOVIES:
        draft.data = action.payload;
        return draft;
    }
  });

export default SuggestedMoviePageReducer;
