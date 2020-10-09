import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';
import {} from '../../emailAuth/utils/emailAuth.reducer';
import { useSelector } from 'react-redux';

import {
  sendingRegisterRequestStart,
  sendingRegisterRequestSuccess,
  sendingRegisterRequestFailure,
} from './register.action';

interface InitialState {
  isSending: boolean;
  registerInfo: {
    name: string;
    email: string;
    password: string;
    emailAuthenticationId: string;
  };
}

const initialState: InitialState = {
  isSending: false,
  registerInfo: {
    name: '',
    email: '',
    password: '',
    emailAuthenticationId: '',
  },
};

const reducer = createReducer(initialState, {
  [sendingRegisterRequestStart.type]: state => {
    state.isSending = true;
  },
  [sendingRegisterRequestSuccess.type]:
    // state => {
    //   state.isSending = true;
    // // },
    (state, action: ReturnType<typeof sendingRegisterRequestSuccess>) => {
      const { name, email, password, emailAuthenticationId } = action.payload;

      state.registerInfo = {
        ...state.registerInfo,
        name: name,
        email: email,
        password: password,
        emailAuthenticationId: emailAuthenticationId,
      };
    },
  [sendingRegisterRequestFailure.type]: state => {
    state.isSending = false;
  },
});

export default reducer;

export const selectIsRegisterSending = (state: RootState) => state.register.isSending;
