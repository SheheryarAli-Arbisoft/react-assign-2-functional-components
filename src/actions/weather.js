import { LOAD_WEATHER_DATA } from './types';

export const loadWeatherData = description => ({
  type: LOAD_WEATHER_DATA,
  payload: description,
});
