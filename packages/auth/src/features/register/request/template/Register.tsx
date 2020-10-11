import React from 'react';
import styled from 'styled-components';

import RegisterForm from '../container/Register';

const Container = styled.div`
  background-color: rgb(246, 248, 252);
  display: flex;
  height: 100%;
`;

const Register = () => {
  return (
    <Container>
      <RegisterForm />
    </Container>
  );
};

export default Register;
