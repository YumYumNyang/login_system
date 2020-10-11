import makeRequest from '../../../api/makeRequest';

export const getUserProfile = () =>
  makeRequest({
    method: 'get',
    url: '/users/me/profile',
    body: {},
  }).then();
