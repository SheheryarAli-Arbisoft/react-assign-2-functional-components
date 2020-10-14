import { WEATHER_DATA_LOADED, WEATHER_ERROR } from '../../actions/types';
import weather from '../../reducers/weather';

describe('testing the video reducer', () => {
  test('should return the default state', () => {
    const expectedState = {
      data: [],
      loading: true,
      errors: null,
    };
    expect(weather(undefined, {})).toEqual(expectedState);
  });

  test('should return the state with all the loaded weather data', () => {
    const action = {
      type: WEATHER_DATA_LOADED,
      payload: {
        city: 'Rawalpindi',
        temp: '25',
      },
    };
    expect(
      weather(
        {
          data: [],
          loading: true,
          errors: null,
        },
        action
      )
    ).toEqual({
      data: [
        {
          city: 'Rawalpindi',
          temp: '25',
        },
      ],
      loading: false,
      errors: null,
    });
    expect(
      weather(
        {
          data: [
            {
              city: 'Lahore',
              temp: '30',
            },
          ],
          loading: false,
          errors: null,
        },
        action
      )
    ).toEqual({
      data: [
        {
          city: 'Rawalpindi',
          temp: '25',
        },
        {
          city: 'Lahore',
          temp: '30',
        },
      ],
      loading: false,
      errors: null,
    });
  });

  test('should return the state with the error object', () => {
    const action = {
      type: WEATHER_ERROR,
      payload: {
        msg: 'Internal Server Error',
        status: 500,
      },
    };
    const expectedState = {
      data: [],
      loading: false,
      errors: {
        msg: 'Internal Server Error',
        status: 500,
      },
    };
    expect(
      weather(
        {
          data: [],
          loading: true,
          errors: null,
        },
        action
      )
    ).toEqual(expectedState);
    expect(
      weather(
        {
          data: [],
          loading: true,
          errors: {
            msg: 'Not Found',
            status: 404,
          },
        },
        action
      )
    ).toEqual(expectedState);
  });
});
