import produce from 'immer';
import initialState from './initialState';
import {
  ERROR,
  LOADING,
  UPDATE_MOVIEPAGE,
  ERROR_MOVIE,
  LOADING_MOVIE,
  UPDATE_AWARD_MOVIEPAGE,
  ERROR_MOVIE_RANK,
  UPDATE_MOVIE_RANK_REDUCER,
  LOADING_MOVIE_RANK,
  ERROR_MOVIE_BOOKMARK_DELET,
  LOADING_MOVIE_BOOKMARK_DELET,
  UPDATE_BOOKMARK_MOVIEPAGE_DELET,
  ERROR_MOVIE_BOOKMARK,
  UPDATE_BOOKMARK_MOVIEPAGE,
  LOADING_MOVIE_BOOKMARK,
} from './constants';

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

      case ERROR_MOVIE:
        draft.error_movie = action.payload.error.message;
        return draft;

      case LOADING_MOVIE:
        draft.loading_movie = action.payload.loadingStatus;
        return draft;

      case UPDATE_AWARD_MOVIEPAGE:
        draft.data_movie = action.payload;
        return draft;

      case UPDATE_MOVIEPAGE:
        draft.data = action.payload;
        return draft;

      ///FAVARITE
      // case ERROR_MOVIE_RANK:
      //   draft.error_movie_favarite = action.payload.error.message;
      //   return draft;

      // case LOADING_MOVIE_RANK:
      //   draft.loading_movie_favarite = action.payload.loadingStatus;
      //   return draft;

      case UPDATE_MOVIE_RANK_REDUCER:
        draft.data.epizod_rank = action.payload.new_epizod_rank;
        draft.data.user_rank = action.payload.rank;
        return draft;

      //BOOKMAR
      case ERROR_MOVIE_BOOKMARK:
        draft.error_movie_bookmark = action.payload.error.message;
        return draft;

      case LOADING_MOVIE_BOOKMARK:
        draft.loading_movie_bookmark = action.payload.loadingStatus;
        return draft;

      case UPDATE_BOOKMARK_MOVIEPAGE:
        draft.data_movie_bookmark = action.payload;
        return draft;

      //DELETE BOOKMARK

      case ERROR_MOVIE_BOOKMARK_DELET:
        draft.error_movie_bookmark_remove = action.payload.error.message;
        return draft;

      case LOADING_MOVIE_BOOKMARK_DELET:
        draft.loading_movie_bookmark_remove = action.payload.loadingStatus;
        return draft;

      case UPDATE_BOOKMARK_MOVIEPAGE_DELET:
        draft.data_movie_bookmark_remove = action.payload;
        return draft;
    }
  });

export default MoviesPageReducer;
