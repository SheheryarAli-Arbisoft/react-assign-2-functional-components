import {
  API_KEY,
  generateWeatherUrl,
  getRequiredData,
} from '../../sagas/weather';

describe('testing the weather saga', () => {
  test('should return a generated weather URL', () => {
    const description = 'Some description';
    const expectedURL = `https://api.openweathermap.org/data/2.5/forecast?q=${description}&appid=${API_KEY}`;
    expect(generateWeatherUrl(description)).toBe(expectedURL);
  });

  test('should return the required weather data from response', () => {
    expect(
      getRequiredData({
        city: {
          id: '123',
          name: 'Rawalpindi',
        },
        list: [
          {
            item: {
              dateTime: '2020',
            },
            main: {
              temp: '30',
              pressure: '1000',
              humidity: '70',
            },
          },
        ],
      })
    ).toEqual({
      id: '123',
      name: 'Rawalpindi',
      forecast: [
        {
          dateTime: undefined,
          temp: '30',
          pressure: '1000',
          humidity: '70',
        },
      ],
    });
  });
});
