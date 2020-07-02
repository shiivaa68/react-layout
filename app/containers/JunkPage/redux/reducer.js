import produce from 'immer';
import initialState from './initialState';
import { ERROR, LOADING, UPDATE_HOMEPAGE } from './constants';

const HomePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ERROR:
        draft.error = action.payload.error.message;
        return draft;

      case LOADING:
        draft.loading = action.payload.loadingStatus;
        return draft;

      case UPDATE_HOMEPAGE:
        draft.data = action.payload.data;
        return draft;
    }
  });

export default HomePageReducer;
