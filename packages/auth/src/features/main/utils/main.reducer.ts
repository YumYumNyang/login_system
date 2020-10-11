import { createReducer } from '@reduxjs/toolkit';
import {
  gettingUserProfileStart,
  gettingUserProfileSuccess,
  gettingUserProfileFailure,
  logOut,
} from './main.action';

import { RootState } from '../../../app/rootReducer';

interface InitialState {
  userInfo: {
    userId: string;
    name: string;
    email: string;
    thumbnailURL: string;
    lastLogginedAt: string;
  };
  isLogined: boolean;
}

const initialState: InitialState = {
  userInfo: {
    userId: '',
    name: '',
    email: '',
    thumbnailURL: '',
    lastLogginedAt: '',
  },
  isLogined: false,
};

const reducer = createReducer(initialState, {
  [gettingUserProfileSuccess.type]: (
    state,
    action: ReturnType<typeof gettingUserProfileSuccess>,
  ) => {
    const { userId, name, email, thumbnailURL, lastLogginedAt } = action.payload;
    state.userInfo = {
      ...state.userInfo,
      userId: userId,
      name: name,
      email: email,
      thumbnailURL: thumbnailURL,
      lastLogginedAt: lastLogginedAt,
    };
    state.isLogined = true;
  },
  [logOut.type]: state => {
    state.userInfo = {
      userId: '',
      name: '',
      email: '',
      thumbnailURL: '',
      lastLogginedAt: '',
    };
    state.isLogined = false;
  },
});

export default reducer;

export const selectUserInfo = (state: RootState) => state.main.userInfo;
export const selectIsLogined = (state: RootState) => state.main.isLogined;
