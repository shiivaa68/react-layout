import produce from 'immer';
import initialState from './initialState';
import { ERROR, LOADING, UPDATE_SERIESPAGE ,ERROR_AWARDS,LOADING_AWARDS,UPDATE_SERIESPAGE_AWARDS,ERROR_FAVARITE_SERIES,LOADING_FAVARITE_SERIES,UPDATE_SERIESPAGE_FAVARITE,ERROR_BOOKMARK_SERIES_DEL,LOADING_BOOKMARK_SERIES_DEL,UPDATE_SERIESPAGE_BOOKMARK_DEL,ERROR_BOOKMARK_SERIES,UPDATE_SERIESPAGE_BOOKMARK,LOADING_BOOKMARK_SERIES} from './constants';

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

          case ERROR_FAVARITE_SERIES:
            draft.error_favarite_series = action.payload.error.message;
            return draft;
          case LOADING_FAVARITE_SERIES:
            draft.loading_favarite_series = action.payload.loadingStatus;
            return draft;
    
          case UPDATE_SERIESPAGE_FAVARITE:
            draft.data_favarite_series = action.payload;
            return draft;

              //BOOKMARK

          case ERROR_BOOKMARK_SERIES:
            draft.error_bookmark_series = action.payload.error.message;
            return draft;
          case LOADING_BOOKMARK_SERIES:
            draft.loading_bookmark_series = action.payload.loadingStatus;
            return draft;
    
          case UPDATE_SERIESPAGE_BOOKMARK:
            draft.data_bookmark_series = action.payload;
            return draft;
              //DELETE BOOKMARK

          case ERROR_BOOKMARK_SERIES_DEL:
            draft.error_bookmark_series_del = action.payload.error.message;
            return draft;
          case LOADING_BOOKMARK_SERIES_DEL:
            draft.loading_bookmark_series_del = action.payload.loadingStatus;
            return draft;
    
          case UPDATE_SERIESPAGE_BOOKMARK_DEL:
            draft.data_bookmark_series_del = action.payload;
            return draft;

    }
  });

export default SeriesPageReducer;
