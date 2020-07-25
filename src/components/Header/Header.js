import React from 'react';
import { Header as PageHeader,
  HeaderLevel1 } from './HeaderStyles';

export const Header = () => {
  return (
    <PageHeader className="App-header">
      <HeaderLevel1>Search repositories of Github</HeaderLevel1>
    </PageHeader>
  );
};
