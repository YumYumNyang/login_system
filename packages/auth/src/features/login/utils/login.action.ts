import { createAction } from '@reduxjs/toolkit';

export const sendingLoginRequestStart = createAction(
  'login/sendingLoginRequestStart',
  (email: string, password: string) => {
    return { payload: { email, password } };
  },
);

export const sendingLoginRequestSuccess = createAction(
  'login/sendingLoginRequestSuccess',
  (email: string, password: string) => {
    return { payload: { email, password } };
  },
);

export const sendingLoginRequestFailure = createAction(
  'login/sendingLogintRequestFailure',
  () => {
    return { payload: null };
  },
);
