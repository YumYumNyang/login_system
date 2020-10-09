import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoginSending } from '../../utils/login.reducer';
import { sendingLoginRequestStart } from '../../utils/login.action';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Form = styled.div`
  min-width: 320px;
  max-width: 640px;
`;

const LoginInput = styled(Input)`
  height: 40px;
  margin-bottom: 12px;
`;

const LoginButton = styled(Button)`
  height: 40px;
`;

const Login = () => {
  const dispatch = useDispatch();
  const isSending = useSelector(selectIsLoginSending);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validate() {
    dispatch(sendingLoginRequestStart(email, password));
  }
  function editEmail(e) {
    setEmail(e.target.value);
  }
  function editPassword(e) {
    setPassword(e.target.value);
  }
  return (
    <Container>
      {isSending ? (
        <span>로그인 완료!</span>
      ) : (
        <Form>
          <LoginInput placeholder="이메일 입력" value={email} onChange={editEmail} />
          <LoginInput
            type="password"
            placeholder="비밀번호 입력"
            onChange={editPassword}
          />
          <LoginButton onClick={validate}>로그인</LoginButton>
        </Form>
      )}
    </Container>
  );
};

export default Login;
