import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Charts from './Charts';

import Title from '../components/Title';
import { ListItem } from '../components/List';

const WeatherListItem = ({ weather: { name, forecast } }) => {
  return (
    <Fragment>
      <ListItem>
        <Title>{name}</Title>
        <Charts forecastData={forecast} />
      </ListItem>
    </Fragment>
  );
};

WeatherListItem.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default WeatherListItem;
