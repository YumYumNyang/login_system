import { createAction } from '@reduxjs/toolkit';

interface UserInfo {
  userId: string;
  name: string;
  email: string;
  thumbnailURL: string;
  lastLogginedAt: string;
}

export const gettingUserProfileStart = createAction(
  'main/gettingUserProfileStart',
  () => {
    return { payload: null };
  },
);
export const gettingUserProfileSuccess = createAction(
  'main/gettingUserProfileSuccess',
  ({ userId, name, email, thumbnailURL, lastLogginedAt }: UserInfo) => {
    return { payload: { userId, name, email, thumbnailURL, lastLogginedAt } };
  },
);
export const gettingUserProfileFailure = createAction(
  'main/gettingUserProfileFailure',
  () => {
    return { payload: null };
  },
);

export const logOut = createAction('main/logOut', () => {
  return { payload: null };
});
