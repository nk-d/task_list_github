import React from 'react';
import { Wrapper, Container, Normalize } from './AppStyles';
import { Header } from '../components/Header';
import { InputSearch } from "../components/InputSearch";
import { Repositories } from "../components/Repositories";

export const App = () => {
  return (
    <Wrapper>
      <Container>

        <Normalize />
        <Header />
        <InputSearch />
        <Repositories />

      </Container>
    </Wrapper>
  );
}
