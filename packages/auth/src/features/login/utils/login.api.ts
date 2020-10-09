import makeRequest from '../../../api/makeRequest';

interface LoginResponse {
  token: string;
}

export const sendingLoginRequest = (email: string, password: string) =>
  makeRequest<LoginResponse>({
    method: 'post',
    url: '/login/oauth',
    body: {
      email,
      password,
    },
  });
