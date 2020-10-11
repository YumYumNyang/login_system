import React from 'react';
import LoginForm from '../container/Login';
import styled from 'styled-components';

const Container = styled.div`
  background-color: rgb(246, 248, 252);
  display: flex;
  height: 100%;
  width: 100%;
`;

const Login = () => {
  return (
    <Container>
      <LoginForm></LoginForm>
    </Container>
  );
};

export default Login;
