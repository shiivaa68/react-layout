import produce from 'immer';
import initialState from './initialState';
import {
  //REGISTER ONE
  ERROR_REGISTER_STEP_ONE,
  UPDATE_REGISTER_STEP_ONE,
  LOADING_REGISTER_STEP_ONE,
  //REGISTER THREE
  ERROR_REGISTER_STEP_THREE,
  UPDATE_REGISTER_STEP_THREE,
  LOADING_REGISTER_STEP_THREE,
  //COMPONET SHOW
  UPDATE_SHOULD_SHOW_LOGIN,
  UPDATE_SHOULD_SHOW_REGISTER,
  UPDATE_SHOULD_SHOW_PASSWORD,
  //LOGIN
  ERROR_LOGIN,
  UPDATE_LOGIN,
  LOADING_LOGIN,
} from './constants';

const LoginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      //REGISTER ONE
      case ERROR_REGISTER_STEP_ONE:
        draft.error_register_one = action.payload.error;
        return draft;

      case LOADING_REGISTER_STEP_ONE:
        draft.loading_register_one = action.payload.loadingStatus;
        return draft;

      case UPDATE_REGISTER_STEP_ONE:
        draft.data_register_one = action.payload;
        return draft;
      //REGISTER TWO
      case ERROR_REGISTER_STEP_THREE:
        draft.error_register_three = action.payload.error;
        return draft;

      case LOADING_REGISTER_STEP_THREE:
        draft.loading_register_three = action.payload.loadingStatus;
        return draft;

      case UPDATE_REGISTER_STEP_THREE:
        draft.data_register_three = action.payload;
        return draft;
      // SHOW COMPONENT
      case UPDATE_SHOULD_SHOW_LOGIN:
        draft.shouldShowLogin = action.payload;
        return draft;

      case UPDATE_SHOULD_SHOW_REGISTER:
        draft.shouldShowRegister = action.payload;
        return draft;

      case UPDATE_SHOULD_SHOW_PASSWORD:
        draft.updateShouldShowPassword = action.payload;
        return draft;
      //LOGIN

      case ERROR_LOGIN:
        console.log({ action });
        draft.error_login = action.payload.error;
        return draft;

      case LOADING_LOGIN:
        draft.loading_login = action.payload.loadingStatus;
        return draft;

      case UPDATE_LOGIN:
        draft.data_login = action.payload;
        return draft;
    }
  });

export default LoginPageReducer;
