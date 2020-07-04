import produce from 'immer';
import initialState from './initialState';
import { ERROR, LOADING, UPDATE_LIST_DATA } from './constants';

const ListViewReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ERROR:
        draft.error = action.payload.error.message;
        return draft;

      case LOADING:
        draft.loading = action.payload.loadingStatus;
        return draft;

      case UPDATE_LIST_DATA:
        draft.data = action.payload[0];
        return draft;
    }
  });

export default ListViewReducer;
