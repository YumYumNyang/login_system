import { takeEvery, call, put, all, delay } from 'typed-redux-saga';
import Router from 'next/router';
import {
  sendingLoginRequestSuccess,
  sendingLoginRequestFailure,
  sendingLoginRequestStart,
} from './login.action';
import { tokenStore } from '../../../api/tokenStore';
import { sendingLoginRequest } from './login.api';

function save(token) {
  tokenStore.save(token);
}

function* sendLoginSaga(action: ReturnType<typeof sendingLoginRequestStart>) {
  try {
    const { email, password } = action.payload;
    const token = yield call(sendingLoginRequest, email, password);
    console.log(token);
    yield save(token);
    yield put(sendingLoginRequestSuccess(email, password));
    yield delay(3000);
    yield Router.push('/');
  } catch (err) {
    yield put(sendingLoginRequestFailure());
    console.log(err);
  }
}

export function* watchLogin() {
  yield all([takeEvery(sendingLoginRequestStart.type, sendLoginSaga)]);
}
