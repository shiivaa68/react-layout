import produce from 'immer';
import initialState from './initialState';
import { ERROR, LOADING, UPDATE_CREW } from './constants';

const CrewPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ERROR:
        draft.error = action.payload.error.message;
        return draft;

      case LOADING:
        draft.loading = action.payload.loadingStatus;
        return draft;

      case UPDATE_CREW:
        draft.data = action.payload;
        return draft;
    }
  });

export default CrewPageReducer;