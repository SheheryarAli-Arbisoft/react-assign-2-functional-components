import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem } from '../components/List';
import { getLoadingSelector, getDataSelector } from '../selectors/weather';

export const WeatherList = () => {
  const loading = useSelector(getLoadingSelector);
  const data = useSelector(getDataSelector);

  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Fragment>
      <List>
        {!loading &&
          data.length > 0 &&
          data.map(weather => <ListItem key={weather.id} weather={weather} />)}
      </List>
    </Fragment>
  );
};
