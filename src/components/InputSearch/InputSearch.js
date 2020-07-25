import React, { useState, useEffect } from 'react';
import { Container, Form, Input, Button, SearchButton, Spinner } from './InputSearchStyles';
import { searchActions } from "../../actions";
import { connect } from 'react-redux';
import { toQuery } from "../../helpers";

export const LegacyInputSearch = ({ dispatch, loading }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(searchActions.getAll());
  }, [dispatch]);

  const submitHandler = e => {
    e.preventDefault();

    if (toQuery(value) && !loading) {
      dispatch(searchActions.getSearchResult(
        toQuery(value),
        1
      ));
    }
  };

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Input
          placeholder='Search'
          id='search'
          name='search'
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
        />

        <Button>
          { loading ? <Spinner /> : <SearchButton /> }
        </Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = state => {
  const { loading } = state.repos;
  return {
    loading
  };
}

export const InputSearch = connect(mapStateToProps)(LegacyInputSearch);
