import { createAction } from '@reduxjs/toolkit';

export const sendingEmailRequestStart = createAction(
  'emailAuth/sendingEmailRequestStart',
  (email: string) => {
    return { payload: email };
  },
);

export const sendingEmailRequestSuccess = createAction(
  'emailAuth/sendingEmailRequestSuccess',
  (email: string, emailAuthenticationId: string) => {
    return { payload: { email, emailAuthenticationId } };
  },
);

export const sendingEmailRequestFailure = createAction(
  'emailAuth/sendingEmailRequestFailure',
  () => {
    return { payload: null };
  },
);

export const emailValidationStart = createAction(
  'emailAuth/emailValidationStart',
  (emailAuthenticationId: string, authenticationKey: string) => {
    return { payload: { emailAuthenticationId, authenticationKey } };
  },
);
export const emailValidationSuccess = createAction(
  'emailAuth/emailValidationSuccess',
  () => {
    return { payload: null };
  },
);
export const emailValidationFailure = createAction(
  'emailAuth/emailValidationFailure',
  () => {
    return { payload: null };
  },
);
