import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  sendingEmailRequestStart,
  emailValidationStart,
} from '../../utils/emailAuth.action';

import {
  selectEmailAuthenticationId,
  selectIsAuthenticated,
  selectIsEmailAuthSending,
} from '../../utils/emailAuth.reducer';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* 
  width: 100%;
  height: 100%; */
`;

const Form = styled.div`
  min-width: 320px;
  max-width: 640px;
`;

const EmailInput = styled(Input)`
  height: 40px;
  margin-bottom: 12px;
`;

const AuthenticateButton = styled(Button)`
  height: 40px;
  margin-bottom: 12px;
`;

const Request = () => {
  const dispatch = useDispatch();
  const isSending = useSelector(selectIsEmailAuthSending);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [email, setEmail] = useState('');
  const emailAuthenticationId = useSelector(selectEmailAuthenticationId);
  const [authenticationKey, setKey] = useState('');
  function editEmail(e) {
    setEmail(e.target.value);
  }

  function sendEmail() {
    dispatch(sendingEmailRequestStart(email));
  }
  function emailAuthenticate() {
    dispatch(emailValidationStart(emailAuthenticationId, authenticationKey));
  }
  function editValidationNumber(e) {
    setKey(e.target.value);
  }

  return (
    <Container>
      {!isAuthenticated ? (
        <Form>
          <EmailInput placeholder="이메일 입력" value={email} onChange={editEmail} />
          <EmailInput
            disabled={!isSending}
            value={authenticationKey}
            onChange={editValidationNumber}
            placeholder="인증키 입력"
          />
          {!isSending ? (
            <AuthenticateButton onClick={sendEmail}>이메일보내기</AuthenticateButton>
          ) : (
            <AuthenticateButton onClick={emailAuthenticate}>인증하기</AuthenticateButton>
          )}
        </Form>
      ) : (
        <Form>
          <EmailInput placeholder={email} disabled={isSending} />
          <AuthenticateButton>인증완료</AuthenticateButton>
        </Form>
      )}
    </Container>
  );
};

export default Request;
