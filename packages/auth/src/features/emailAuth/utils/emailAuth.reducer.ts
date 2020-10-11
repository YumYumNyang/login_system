import { createReducer } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { RootState } from '../../../app/rootReducer';

import {
  sendingEmailRequestStart,
  sendingEmailRequestSuccess,
  sendingEmailRequestFailure,
  emailValidationStart,
  emailValidationSuccess,
  emailValidationFailure,
  emailIsExistStart,
  emailIsExistSuccess,
  emailIsExistFailure,
} from './emailAuth.action';
interface InitialState {
  emailAuth: {
    email: string;
    emailAuthenticationId: string;
    isAuthenticated: boolean;
    existence: boolean;
  };
  isSending: boolean;
}

const initialState: InitialState = {
  // emailAuth: null,
  emailAuth: {
    email: '',
    emailAuthenticationId: '',
    isAuthenticated: false,
    existence: false,
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
    state.isSending = true;
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
  [emailIsExistStart.type]: state => {
    state.isSending = false;
    state.emailAuth.existence = false;
  },
  [emailIsExistSuccess.type]: state => {
    state.emailAuth.existence = true;
  },
  [emailIsExistFailure.type]: state => {
    state.emailAuth.existence = false;
  },
});

export default reducer;

export const selectEmailAuth = (state: RootState) => state.auth.emailAuth;
export const selectIsEmailAuthSending = (state: RootState) => state.auth.isSending;
export const selectEmailAuthenticationId = (state: RootState) =>
  state.auth.emailAuth.emailAuthenticationId;
// state.auth.emailAuth?.emailAuthenticationId || '';

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.emailAuth.isAuthenticated;
// state.auth.emailAuth?.isAuthenticated || false;
