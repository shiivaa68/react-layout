import produce from 'immer';
import initialState from './initialState';
import { ERROR, LOADING, UPDATE_PACKAGE_DETAILS } from './constants';

const PackageDetailsPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ERROR:
        draft.error = action.payload.error.message;
        return draft;

      case LOADING:
        draft.loading = action.payload.loadingStatus;
        return draft;

      case UPDATE_PACKAGE_DETAILS:
        draft.data = action.payload;
        return draft;
    }
  });

export default PackageDetailsPageReducer;