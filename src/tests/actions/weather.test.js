import { LOAD_WEATHER_DATA } from '../../actions/types';
import { loadWeatherData } from '../../actions/weather';

describe('testing the weather action creators', () => {
  test('should return an action to load weather data according to description', () => {
    const description = 'Rawalpindi';
    const expectedAction = {
      type: LOAD_WEATHER_DATA,
      payload: description,
    };
    expect(loadWeatherData(description)).toEqual(expectedAction);
  });
});
