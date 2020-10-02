import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';

import { getWeatherData } from '../actions/weather';

// eslint-disable-next-line no-shadow
const SearchForm = ({ getWeatherData }) => {
  const [description, setDescription] = useState('');

  const onChange = e => {
    setDescription(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    // Getting weather data related to description
    getWeatherData(description);
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

SearchForm.propTypes = {
  getWeatherData: PropTypes.func.isRequired,
};

export default connect(null, { getWeatherData })(SearchForm);
