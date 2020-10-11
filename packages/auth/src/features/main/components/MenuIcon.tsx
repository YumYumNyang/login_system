import { MenuOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

const MenuIconDiv = styled.div``;

function MenuIcon() {
  return (
    <MenuIconDiv>
      <MenuOutlined />
    </MenuIconDiv>
  );
}

export default MenuIcon;
