import * as React from 'react';
import { NextPage } from 'next';
import App from '../src/features/main/container/App';
const Index: NextPage = () => <App></App>;

Index.getInitialProps = async () => {
  const title = 'welcome!';
  return { title };
};

export default Index;
