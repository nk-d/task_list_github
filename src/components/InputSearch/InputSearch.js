import React, { useState } from 'react';
import { Container, Form, Input, Button, SearchButton } from './InputSearchStyles';

export const InputSearch = () => {
  const [value, setValue] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    console.log('submitHandler');
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
          <SearchButton />
        </Button>
      </Form>
    </Container>
  );
};
