import React from 'react';
import { Wrapper, Container } from './AppStyles';
import { Header } from '../components/Header';
import { Normalize } from './GlobalStyles';

export const App = () => {
  return (
    <Wrapper>
      <Container>

        <Normalize />
        <Header />
        Some content

      </Container>
    </Wrapper>
  );
}
