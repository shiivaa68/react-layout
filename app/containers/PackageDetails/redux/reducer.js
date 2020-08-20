import produce from 'immer';
import initialState from './initialState';
import { ERROR, LOADING, UPDATE_PACKAGE_DETAILS,UPDATE_PACKAGE_DISCOUNT,UPDATE_PACKAGE_ORDER } from './constants';

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
        draft.data_package_datail = action.payload;
        return draft;

      case UPDATE_PACKAGE_ORDER:
          draft.data_package_order = action.payload;
          return draft;
      case UPDATE_PACKAGE_DISCOUNT:
            draft.data_package_discount = action.payload;
            return draft;
    }
  });

export default PackageDetailsPageReducer;