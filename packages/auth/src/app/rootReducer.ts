import { combineReducers } from '@reduxjs/toolkit';
import emailAuthReducer from '../features/emailAuth/utils/emailAuth.reducer';
import loginReducer from '../features/login/utils/login.reducer';
import registerReducer from '../features/register/utils/register.reducer';
import mainReducer from '../features/main/utils/main.reducer';
const rootReducer = combineReducers({
  auth: emailAuthReducer,
  register: registerReducer,
  login: loginReducer,
  main: mainReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
