import produce from 'immer';
import initialState from './initialState';
import {
  ERROR,
  LOADING,
  UPDATE_SERIESPAGE,
  ERROR_AWARDS,
  LOADING_AWARDS,
  UPDATE_SERIESPAGE_AWARDS,
ERROR_SERIES_RANK,
UPDATE_SERIES_RANK_REDUCER,
LOADING_SERIES_RANK,
  ERROR_BOOKMARK_SERIES_DEL,
  LOADING_BOOKMARK_SERIES_DEL,
  UPDATE_SERIESPAGE_BOOKMARK_DEL,
  ERROR_BOOKMARK_SERIES,
  UPDATE_SERIESPAGE_BOOKMARK,
  LOADING_BOOKMARK_SERIES,
  ERROR_SERIE_COMMENT,
  LOADING_SERIE_COMMENT,UPDATE_COMMENT_SERIE,
  ERROR_SERIES_COMMENT_SEND,LOADING_SERIES_COMMENT_SEND,UPDATE_COMMENT_SERIES_SEND,
  ERROR_SERIES_LIKE,LOADING_SERIES_LIKE,UPDATE_SERIES_LIKE,
} from './constants';

const SeriesPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ERROR:
        draft.error = action.payload.error.message;
        return draft;
      case LOADING:
        draft.loading = action.payload.loadingStatus;
        return draft;

      case UPDATE_SERIESPAGE:
        draft.data = action.payload;
        return draft;
      //AWARDS
      case ERROR_AWARDS:
        draft.error_awards = action.payload.error.message;
        return draft;
      case LOADING_AWARDS:
        draft.loading_awards = action.payload.loadingStatus;
        return draft;

      case UPDATE_SERIESPAGE_AWARDS:
        draft.data_awards = action.payload;
        return draft;
      //FAVARITE

      // case ERROR_FAVARITE_SERIES:
      //   draft.error_favarite_series = action.payload.error.message;
      //   return draft;
      // case LOADING_FAVARITE_SERIES:
      //   draft.loading_favarite_series = action.payload.loadingStatus;
      //   return draft;

      // case UPDATE_SERIESPAGE_FAVARITE:
      //   draft.data_favarite_series = action.payload;
      //   return draft;
      case UPDATE_SERIES_RANK_REDUCER:
        draft.data.epizod_rank = action.payload.new_epizod_rank;
        draft.data.user_rank = action.payload.rank;
        return draft;


      //BOOKMARK

      // case ERROR_BOOKMARK_SERIES:
      //   draft.error_bookmark_series = action.payload.error.message;
      //   return draft;
      // case LOADING_BOOKMARK_SERIES:
      //   draft.loading_bookmark_series = action.payload.loadingStatus;
      //   return draft;

      case UPDATE_SERIESPAGE_BOOKMARK:
        draft.data.favorite = action.payload;
        return draft;
      //DELETE BOOKMARK

      // case ERROR_BOOKMARK_SERIES_DEL:
      //   draft.error_bookmark_series_del = action.payload.error.message;
      //   return draft;
      // case LOADING_BOOKMARK_SERIES_DEL:
      //   draft.loading_bookmark_series_del = action.payload.loadingStatus;
      //   return draft;

      case UPDATE_SERIESPAGE_BOOKMARK_DEL:
        draft.data.favorite = action.payload;
        return draft;
         //COMMENT SERIES
         case ERROR_SERIE_COMMENT:
          draft.error_comment = action.payload.error.message;
          return draft;
  
        case LOADING_SERIE_COMMENT:
          draft.loading_comment = action.payload.loadingStatus;
          return draft;
  
        case UPDATE_COMMENT_SERIE:
          draft.comment_series = action.payload;
          return draft;


            //COMMENT SEND
            case ERROR_SERIES_COMMENT_SEND:
              draft.error_comment = action.payload.error.message;
              return draft;
      
            case LOADING_SERIES_COMMENT_SEND:
              draft.loading_send_comment = action.payload.loadingStatus;
              return draft;
      
            case UPDATE_COMMENT_SERIES_SEND:
              draft.send_comment = action.payload;
              return draft;


              //LIKE
              case UPDATE_SERIES_LIKE:
                draft.data.score = action.payload.comment_score;
                draft.data.your_score = action.payload.score;
                return draft;
    }
  });

export default SeriesPageReducer;
