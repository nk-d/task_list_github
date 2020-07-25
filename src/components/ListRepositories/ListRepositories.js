import React from 'react';
import { Container, HeaderLevel2, RepoList } from './ListRepositoriesStyles';
import { ShowRepository } from '../ShowRepository';
import { connect } from 'react-redux';
import { Pagination } from "../Pagination";

export const LegacyListRepositories = ({ items, count, totalPages, error, loading}) => {
  const listRepos = items ? items.map(item => <ShowRepository key={item.id} repository={item} />) : '';

  if (error)
    return error

  if (loading)
    return 'loading'

  return (
    <Container>
      <HeaderLevel2>
        { count ? count.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : 0 } repository results
      </HeaderLevel2>
      <RepoList>
        { listRepos }
      </RepoList>
      { totalPages > 0 ? <Pagination /> : '' }
    </Container>
  );
};

const mapStateToProps = state => {
  const { items, count, totalPages, error, loading } = state.repos;
  return {
    items,
    count,
    totalPages,
    error,
    loading
  };
}

export const ListRepositories = connect(mapStateToProps)(LegacyListRepositories);
