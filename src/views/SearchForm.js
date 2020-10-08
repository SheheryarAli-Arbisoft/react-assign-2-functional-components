import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

import { loadWeatherData } from '../actions/weather';

// eslint-disable-next-line no-shadow
export const SearchForm = () => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState('');

  const onChange = e => {
    setDescription(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(loadWeatherData(description));
  };

  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Fragment>
      <Form onSubmit={onSubmit}>
        <Input
          type='text'
          placeholder='Search'
          name='description'
          value={description}
          onChange={onChange}
        />
        <Button type='submit'>Search</Button>
      </Form>
    </Fragment>
  );
};
