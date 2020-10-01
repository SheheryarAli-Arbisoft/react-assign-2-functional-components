import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';

import { connect } from 'react-redux';
import { getWeatherData } from '../actions/weather';

const SearchForm = ({ getWeatherData }) => {
  const [description, setDescription] = useState('');

  const onChange = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Getting weather data related to description
    getWeatherData(description);
  };

  return (
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
