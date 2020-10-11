import React from 'react';
import styled from 'styled-components';
import BlueButton from '../BlueButton';
import WhiteButton from '../WhiteButton';
import Router from 'next/router';
const SignDiv = styled.div`
  display: flex;
  width: 40rem;
  justify-content: space-around;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

function Sign() {
  return (
    <SignDiv>
      <WhiteButton onClick={() => Router.push('/login')}>로그인</WhiteButton>
      <BlueButton type="primary" onClick={() => Router.push('/auth')}>
        회원가입
      </BlueButton>
    </SignDiv>
  );
}
export default Sign;
