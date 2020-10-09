import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';

import {
  sendingEmailRequestStart,
  sendingEmailRequestSuccess,
  sendingEmailRequestFailure,
  emailValidationStart,
  emailValidationSuccess,
  emailValidationFailure,
} from './emailAuth.action';
interface InitialState {
  emailAuth: {
    email: string;
    emailAuthenticationId: string;
    isAuthenticated: boolean;
  };
  isSending: boolean;
}

const initialState: InitialState = {
  emailAuth: {
    email: '',
    emailAuthenticationId: '',
    isAuthenticated: false,
  },
  isSending: false,
};

const reducer = createReducer(initialState, {
  [sendingEmailRequestStart.type]: state => {
    state.isSending = true;
  },
  [sendingEmailRequestSuccess.type]: (
    state,
    action: ReturnType<typeof sendingEmailRequestSuccess>,
  ) => {
    const { email, emailAuthenticationId } = action.payload;
    state.emailAuth = {
      ...state.emailAuth,
      email: email,
      emailAuthenticationId: emailAuthenticationId,
      isAuthenticated: false,
    };
  },
  [sendingEmailRequestFailure.type]: state => {
    state.isSending = false;
  },
  [emailValidationStart.type]: state => {
    state.emailAuth.isAuthenticated = true;
  },
  [emailValidationSuccess.type]: state => {
    state.emailAuth.isAuthenticated = true;
  },
  [emailValidationFailure.type]: state => {
    state.emailAuth.isAuthenticated = false;
  },
});

export default reducer;

export const selectEmailAuth = (state: RootState) => state.auth.emailAuth;
export const selectIsEmailAuthSending = (state: RootState) => state.auth.isSending;
export const selectEmailAuthenticationId = (state: RootState) =>
  state.auth.emailAuth.emailAuthenticationId;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.emailAuth.isAuthenticated;
