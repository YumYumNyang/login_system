import React from 'react';
import styled from 'styled-components';

const Logostyle = styled.div`
  font-weight: bold;
  font-size: 2.8rem;
  width: 20%;
  display: flex;
  justify-content: center;
  position: sticky;
`;
const Blue = styled.span`
  color: #1968fc;
`;

function Logo() {
  return (
    <Logostyle>
      <Blue>Nine</Blue>Hire
    </Logostyle>
  );
}
export default Logo;
