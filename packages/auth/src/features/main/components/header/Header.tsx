import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Sign from './Sign';
import Logo from './Logo';
import Logout from './Logout';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { tokenStore } from '../../../../api/tokenStore';
import { gettingUserProfileStart } from '../../../main/utils/main.action';
import { selectIsLogined } from '../../utils/main.reducer';
const Headerstyle = styled.section`
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  height: 7rem;
  position: sticky;
  top: 0;
  right: 0;
  background-color: rgb(255, 255, 255, 0.9);
`;

function Header() {
  const dispatch = useDispatch();
  const [token, setToken] = useState(false);
  const tokenCheck = tokenStore.get();
  const isLogined = useSelector(selectIsLogined);
  useEffect(() => {
    if (!tokenCheck) {
      setToken(false);
    } else {
      setToken(true);
    }
    dispatch(gettingUserProfileStart());
    console.log('받아오자');
  }, []);
  console.log('token?', token);
  console.log('islogined?', isLogined);
  return (
    <Headerstyle>
      <Logo />
      <Menu />
      {!token ? <Sign /> : <Logout />}
    </Headerstyle>
  );
}
export default Header;
