import produce from 'immer';
import initialState from './initialState';
import { LOADING, ERROR, REST_ERROR_MSG, UPDATE_STEP } from './constants';

const LoginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ERROR:
        draft.error = action.payload.error;
        return draft;

      case REST_ERROR_MSG:
        draft.error = '';
        return draft;

      case LOADING:
        draft.loading = action.payload.loadingStatus;
        return draft;

      case UPDATE_STEP:
        draft.authFlowStep = action.payload.step;
        return draft;
    }
  });

export default LoginPageReducer;
