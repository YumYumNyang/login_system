import React from 'react';
import styled from 'styled-components';

import RegisterForm from '../container/Register';

const Container = styled.div`
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
