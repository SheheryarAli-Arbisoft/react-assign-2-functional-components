import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

import { LOAD_WEATHER_DATA } from '../sagas/types';

// eslint-disable-next-line no-shadow
const SearchForm = ({ dispatch }) => {
  const [description, setDescription] = useState('');

  const onChange = e => {
    setDescription(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    // Getting weather data related to description
    dispatch({
      type: LOAD_WEATHER_DATA,
      payload: description,
    });
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

export default connect(null, null)(SearchForm);
