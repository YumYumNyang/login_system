import makeRequest from '../../../api/makeRequest';

interface SendEmailResponse {
  emailAuthenticationId: string;
}

export const sendingEmailRequest = (email: string) =>
  makeRequest<SendEmailResponse>({
    method: 'post',
    url: '/email-authentications',
    body: {
      email,
    },
  });
export const emailValidate = (emailAuthenticationId: string, authenticationKey: string) =>
  makeRequest({
    method: 'post',
    url: `/email-authentications/${emailAuthenticationId}/authenticate`,
    body: {
      authenticationKey,
    },
  });

export const emailExistence = (email: string) =>
  makeRequest({
    method: 'get',
    url: `/users/emails/${email}/existence`,
    body: {},
  });
