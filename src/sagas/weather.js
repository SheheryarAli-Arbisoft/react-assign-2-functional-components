import { takeEvery, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_WEATHER_DATA,
  WEATHER_DATA_LOADED,
  WEATHER_ERROR,
} from '../actions/types';
import { getDataSelector } from '../selectors/weather';

const API_KEY = '8cf50a6624d851440243826f2e4d7b3a';

/* eslint-disable no-console */

// Generate weather url
const generateWeatherUrl = description =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${description}&appid=${API_KEY}`;

// Get required data from response
const getRequiredData = response => {
  const { id, name } = response.city;

  const result = { id, name, forecast: [] };

  response.list.forEach(item => {
    const { dt_txt: dateTime } = item;

    const { temp, pressure, humidity } = item.main;

    result.forecast.push({
      dateTime,
      temp,
      pressure,
      humidity,
    });
  });

  return result;
};

// eslint-disable-next-line import/prefer-default-export
function* getWeatherData(action) {
  const { payload: description } = action;

  const data = yield select(getDataSelector);

  if (
    data
      .map(item => item.name.toLowerCase())
      .indexOf(description.toLowerCase()) !== -1
  ) {
    return;
  }

  try {
    let result = yield call(() => axios.get(generateWeatherUrl(description)));

    result = getRequiredData(result.data);

    yield put({
      type: WEATHER_DATA_LOADED,
      payload: result,
    });
  } catch (err) {
    console.log(err.message);

    yield put({
      type: WEATHER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
}

export function* weatherSaga() {
  yield takeEvery(LOAD_WEATHER_DATA, getWeatherData);
}
