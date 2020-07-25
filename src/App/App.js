import React from 'react';
import { Wrapper, Container, Normalize } from './AppStyles';
import { Header } from '../components/Header';
import { InputSearch } from "../components/InputSearch";
import { ListRepositories } from "../components/ListRepositories";

export const App = () => {
  return (
    <Wrapper>
      <Container>

        <Normalize />
        <Header />
        <InputSearch />
        <ListRepositories />

      </Container>
    </Wrapper>
  );
}
