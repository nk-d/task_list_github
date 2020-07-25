import React from 'react';
import { Container, HeaderLevel2, RepoList } from './ListRepositoriesStyles';
import { ShowRepository } from '../ShowRepository';
import { connect } from 'react-redux';

export const LegacyListRepositories = ({ items, count }) => {
  const listRepos = items ? items.map(item => <ShowRepository key={item.id} repository={item} />) : '';

  return (
    <Container>
      <HeaderLevel2>
        { count } repository results
      </HeaderLevel2>
      <RepoList>
        { listRepos }
      </RepoList>
    </Container>
  );
};

const mapStateToProps = state => {
  const { items, count } = state.repos;
  return {
    items,
    count
  };
}

export const ListRepositories = connect(mapStateToProps)(LegacyListRepositories);
