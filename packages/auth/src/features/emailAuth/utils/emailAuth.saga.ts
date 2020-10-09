import { put, all, takeEvery } from 'redux-saga/effects';
import { call } from 'typed-redux-saga';
import { sendingEmailRequest, emailValidate } from './emailAuth.api';
import {
  sendingEmailRequestStart,
  sendingEmailRequestSuccess,
  sendingEmailRequestFailure,
} from './emailAuth.action';
import {
  emailValidationStart,
  emailValidationSuccess,
  emailValidationFailure,
} from './emailAuth.action';

function* sendEmailSaga(action: ReturnType<typeof sendingEmailRequestStart>) {
  try {
    const email = action.payload;
    const { emailAuthenticationId } = yield* call(sendingEmailRequest, email);
    // yield call(emailValidate, emailAuthenticationId);
    yield put(sendingEmailRequestSuccess(email, emailAuthenticationId));
  } catch (err) {
    yield put(sendingEmailRequestFailure());
    console.log(err);
  }
}

function* emailValidationSaga(action: ReturnType<typeof emailValidationStart>) {
  try {
    const { emailAuthenticationId, authenticationKey } = action.payload;
    const emailValid = yield call(
      emailValidate,
      emailAuthenticationId,
      authenticationKey,
    );
    yield put(emailValidationSuccess());
  } catch (err) {
    yield put(emailValidationFailure());
  }
}

export function* watchEmailAuth() {
  yield all([
    takeEvery(sendingEmailRequestStart.type, sendEmailSaga),
    takeEvery(emailValidationStart.type, emailValidationSaga),
  ]);
}
