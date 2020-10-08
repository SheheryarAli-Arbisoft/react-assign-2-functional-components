import { LOAD_WEATHER_DATA } from './types';

export const loadWeatherData = description => dispatch => {
  dispatch({
    type: LOAD_WEATHER_DATA,
    payload: description,
  });
};
