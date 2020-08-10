import produce from 'immer';
import initialState from './initialState';
import {
  ERROR_REGISTER_STEP_ONE,
  UPDATE_REGISTER_STEP_ONE,
  LOADING_REGISTER_STEP_ONE,
  UPDATE_SHOULD_SHOW_LOGIN,
  UPDATE_SHOULD_SHOW_REGISTER,
} from './constants';

const LoginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ERROR_REGISTER_STEP_ONE:
        console.log({ action });
        draft.error_register_one = action.payload.error;
        return draft;

      case LOADING_REGISTER_STEP_ONE:
        draft.loading_register_one = action.payload.loadingStatus;
        return draft;

      case UPDATE_REGISTER_STEP_ONE:
        draft.data_register_one = action.payload;
        return draft;

      case UPDATE_SHOULD_SHOW_LOGIN:
        draft.shouldShowLogin = action.payload;
        return draft;

      case UPDATE_SHOULD_SHOW_REGISTER:
        draft.shouldShowRegister = action.payload;
        return draft;
    }
  });

export default LoginPageReducer;
