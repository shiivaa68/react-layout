import { AUTH_FLOW_STEPS } from '../../../constants';

const initialState = {
  error: '',
  loading: false,
  authFlowStep: AUTH_FLOW_STEPS.ENTER_PHONE_NUMBER,
};

export default initialState;