import makeRequest from '../../../api/makeRequest';

export const sendingRegisterRequest = (
  name: string,
  email: string,
  password: string,
  emailAuthenticationId: string,
) =>
  makeRequest({
    method: 'post',
    url: '/users',
    body: {
      name,
      email,
      password,
      emailAuthenticationId,
    },
  });

export const emailExistence = (email: string) =>
  makeRequest({
    method: 'post',
    url: `/uses/emails/${email}/existence`,
    body: {
      email,
    },
  });
