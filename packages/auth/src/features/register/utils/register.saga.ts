import Router from 'next/router';
import { all, call, delay, put, takeEvery } from 'typed-redux-saga';
import {
  sendingRegisterRequestStart,
  sendingRegisterRequestSuccess,
  sendingRegisterRequestFailure,
} from './register.action';
import { sendingRegisterRequest } from './register.api';

function* sendRegisterSaga(action: ReturnType<typeof sendingRegisterRequestStart>) {
  console.log('pasdasasddssddasasdsa!!!!', sendingRegisterRequest);
  try {
    const { name, email, password, emailAuthenticationId } = action.payload;
    console.log(typeof name, typeof email, typeof password, typeof emailAuthenticationId);
    const register = yield call(
      sendingRegisterRequest,
      name,
      email,
      password,
      emailAuthenticationId,
    );
    yield put(
      sendingRegisterRequestSuccess(name, email, password, emailAuthenticationId),
    );
    yield delay(3000);
    yield Router.push('/login');
  } catch (err) {
    yield put(sendingRegisterRequestFailure());
    console.log(err);
  }
}

export function* watchRegister() {
  yield all([takeEvery(sendingRegisterRequestStart.type, sendRegisterSaga)]);
}
