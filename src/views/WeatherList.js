import React, { Fragment } from 'react';
import { connect, useSelector } from 'react-redux';

import WeatherListItem from './WeatherListItem';

import { List } from '../components/List';

import { dataSelector } from '../selectors/weather';

const WeatherList = () => {
  const { loading, data } = useSelector(dataSelector);

  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Fragment>
      <List>
        {!loading &&
          data.length > 0 &&
          data.map(weather => (
            <WeatherListItem key={weather.id} weather={weather} />
          ))}
      </List>
    </Fragment>
  );
};

export default connect(null)(WeatherList);
