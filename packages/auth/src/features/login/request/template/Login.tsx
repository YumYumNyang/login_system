import React from 'react';
import LoginForm from '../container/Login';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Login = () => {
  return (
    <Container>
      <LoginForm></LoginForm>
    </Container>
  );
};

export default Login;
