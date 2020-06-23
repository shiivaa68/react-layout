import produce from 'immer';
import initialState from './initialState';
import {
  GET_HOME_PAGE_SUCCESS,
  GET_HOME_PAGE_FAILURE,
  GET_HOME_PAGE_REQUEST,
} from './constants';

const HomePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_HOME_PAGE_REQUEST:
        draft.loading = true;
        draft.error = false;
        break;

      case GET_HOME_PAGE_SUCCESS:
        draft.loading = false;
        draft.data = action.payload.result;
        break;

      case GET_HOME_PAGE_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        break;
    }
  });

export default HomePageReducer;
