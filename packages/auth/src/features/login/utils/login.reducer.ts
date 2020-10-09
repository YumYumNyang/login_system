import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';
import {
  sendingLoginRequestStart,
  sendingLoginRequestSuccess,
  sendingLoginRequestFailure,
} from './login.action';

interface InitialState {
  isSending: boolean;
  loginInfo: {
    email: string;
    password: string;
  };
}

const initialState: InitialState = {
  isSending: false,
  loginInfo: {
    email: '',
    password: '',
  },
};

const reducer = createReducer(initialState, {
  [sendingLoginRequestStart.type]: state => {
    state.isSending = true;
  },
  [sendingLoginRequestSuccess.type]: (
    state,
    action: ReturnType<typeof sendingLoginRequestSuccess>,
  ) => {
    const { email, password } = action.payload;

    state.loginInfo = {
      ...state.loginInfo,
      email: email,
      password: password,
    };
  },
  [sendingLoginRequestFailure.type]: state => {
    state.isSending = false;
  },
});

export default reducer;

export const selectIsLoginSending = (state: RootState) => state.login.isSending;
