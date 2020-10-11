import React, { useState, useEffect } from 'react';
import Request from '../../../emailAuth/request/template/Request';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/rootReducer';
import {
  selectEmailAuth,
  selectIsEmailAuthSending,
} from '../../../emailAuth/utils/emailAuth.reducer';
import { sendingRegisterRequestStart } from '../../utils/register.action';
import { selectIsRegisterSending } from '../../utils/register.reducer';
import Logo from '../../../main/components/header/Logo';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Form = styled.div`
  width: 300px;
`;

const RegisterInput = styled(Input)`
  width: 300px;
  height: 60px;
  margin-bottom: 12px;
`;

const RegisterButton = styled(Button)`
  height: 50px;
  color: white;
  background-color: #1968fc;
  font-weight: bold;
  width: 300px;
`;

const Register = () => {
  const dispatch = useDispatch();
  const isSending = useSelector(selectIsRegisterSending);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  // const [emailAuthenticationId, setEmailAuthenticationId] = useState('')
  const email = useSelector((state: RootState) => state.auth.emailAuth.email);
  const emailAuthenticationId = useSelector(
    (state: RootState) => state.auth.emailAuth.emailAuthenticationId,
  );
  console.log(email);
  console.log(emailAuthenticationId);
  function register() {
    console.log('email!!!', email);
    dispatch(sendingRegisterRequestStart(name, email, password, emailAuthenticationId));
  }
  function editName(e) {
    setName(e.target.value);
  }
  function editPassword(e) {
    setPassword(e.target.value);
  }
  console.log(isSending);

  return !isSending ? (
    <Container>
      <Logo />
      <Request />
      <Form>
        <RegisterInput placeholder="이름 입력" value={name} onChange={editName} />
        <RegisterInput
          placeholder="비밀번호 입력"
          value={password}
          onChange={editPassword}
          type="password"
        />
        <RegisterButton onClick={register}>회원가입</RegisterButton>
      </Form>
    </Container>
  ) : (
    <Container>
      <span>회원가입 완료!</span>
    </Container>
  );
};

export default Register;
