import { createAction } from '@reduxjs/toolkit';

export const sendingRegisterRequestStart = createAction(
  'register/sendingRegisterRequestStart',
  (name: string, email: string, password: string, emailAuthenticationId: string) => {
    return { payload: { name, email, password, emailAuthenticationId } };
  },
);
export const sendingRegisterRequestSuccess = createAction(
  'register/sendingRegisterRequestSuccess',
  (name: string, email: string, password: string, emailAuthenticationId: string) => {
    return { payload: { name, email, password, emailAuthenticationId } };
  },
);
export const sendingRegisterRequestFailure = createAction(
  'register/sendingRegisterRequestFailure',
  () => {
    return { payload: null };
  },
);
export const isEmailExist = createAction(
  'register/isEmailExist',
  (isEmailExist: boolean) => {
    return { payload: isEmailExist };
  },
);
