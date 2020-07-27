import produce from 'immer';
import initialState from './initialState';
import {
  ERROR_CASTS,
  ERROR_MOVIES,
  ERROR_SERIES,
  LOADING_CASTS,
  LOADING_MOVIES,
  LOADING_SERIES,
  UPADTE_CASTS_SEARCHPAGE,
  UPDATE_MOVIES_SEARCHPAGE,
  UPDATE_SERIES_SEARCHPAGE,
} from './constants';

//REDUCER MOVIE
const SearchPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ERROR_MOVIES:
        draft.movies_error = action.payload.error.message;
        return draft;

      case LOADING_MOVIES:
        draft.movies_loading = action.payload.loadingStatus;
        return draft;

      case UPDATE_MOVIES_SEARCHPAGE:
        draft.movies_data = action.payload.data;
        return draft;

      case ERROR_SERIES:
        draft.series_error = action.payload.error.message;
        return draft;

      case LOADING_SERIES:
        draft.series_loading = action.payload.loadingStatus;
        return draft;

      case UPDATE_SERIES_SEARCHPAGE:
        draft.series_data = action.payload.data;
        return draft;

      case ERROR_CASTS:
        draft.casts_error = action.payload.error.message;
        return draft;

      case LOADING_CASTS:
        draft.casts_loading = action.payload.loadingStatus;
        return draft;

      case UPADTE_CASTS_SEARCHPAGE:
        draft.casts_data = action.payload.data;
        return draft;
    }
  });

export default SearchPageReducer;
