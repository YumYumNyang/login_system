import { fork } from 'redux-saga/effects';
import { watchEmailAuth } from '../features/emailAuth/utils/emailAuth.saga';
import { watchLogin } from '../features/login/utils/login.saga';
import { watchRegister } from '../features/register/utils/register.saga';

export default function* rootSaga() {
  yield fork(watchEmailAuth);
  yield fork(watchRegister);
  yield fork(watchLogin);
}
