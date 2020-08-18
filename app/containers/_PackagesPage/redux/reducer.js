import produce from 'immer';
import initialState from './initialState';
import { ERROR, LOADING,UPDATE_PACKAGE_DATA } from './constants';

const PackageListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ERROR:
        draft.error = action.payload.error.message;
        return draft;

      case LOADING:
        draft.loading = action.payload.loadingStatus;
        return draft;

        case UPDATE_PACKAGE_DATA:
        draft.data = action.payload;
        return draft;

    
    }
  });

export default PackageListReducer;
