import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/header/Header';
import Intro from '../components/intro/Intro';
import Content from '../components/content/Content';
import Qa from '../components/qa/Qa';
import Outro from '../components/outro/Outro';
import Desc from '../components/desc/Desc';

const GlobalStyle = createGlobalStyle`
  html{
    font-size :10px;
  }
`;

const Footer = styled.div``;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Intro />
      <Content />
      <Qa />
      <Outro />
      <Footer />
      <Desc />
    </div>
  );
}

export default App;
