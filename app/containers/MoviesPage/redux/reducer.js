import produce from 'immer';
import initialState from './initialState';
import { ERROR, LOADING, UPDATE_MOVIEPAGE } from './constants';

const MoviesPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ERROR:
        draft.error = action.payload.error.message;
        return draft;

      case LOADING:
        draft.loading = action.payload.loadingStatus;
        return draft;

      case UPDATE_MOVIEPAGE:
        draft.data = action.payload;
        return draft;
    }
  });

export default MoviesPageReducer;
