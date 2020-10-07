import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Charts from './Charts';

import { Title } from '../components/Text';
import { ListItem } from '../components/List';

const WeatherListItem = ({ weather: { name, forecast } }) => {
  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Fragment>
      <ListItem>
        <Title>{name}</Title>
        <Charts forecastData={forecast} />
      </ListItem>
    </Fragment>
  );
};

WeatherListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  weather: PropTypes.object.isRequired,
};

export default WeatherListItem;
