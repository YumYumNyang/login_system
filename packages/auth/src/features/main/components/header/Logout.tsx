import React, { useEffect } from 'react';
import styled from 'styled-components';
import BlueButton from '../BlueButton';
import { selectUserInfo } from '../../../main/utils/main.reducer';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../utils/main.action';

const SignDiv = styled.div`
  display: flex;
  width: 40rem;
  justify-content: space-around;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const Logout = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  console.log(userInfo);

  function logout() {
    console.log('로그아웃 하구시픈ㅇ딩');
    dispatch(logOut());
  }

  return (
    <SignDiv>
      <div>{userInfo.name}님 안녕하세요.</div>
      <BlueButton type="primary" onClick={logout}>
        로그아웃
      </BlueButton>
    </SignDiv>
  );
};

export default Logout;
