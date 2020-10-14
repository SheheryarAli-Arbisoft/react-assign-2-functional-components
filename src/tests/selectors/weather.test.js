import { getLoadingSelector, getDataSelector } from '../../selectors/weather';

const state = {
  weather: {
    loading: false,
    data: [
      {
        title: 'Title 1',
      },
    ],
  },
};

describe('testing the weather selectors', () => {
  test('should return the loading property from state', () => {
    expect(getLoadingSelector(state)).toBe(false);
  });

  test('should return the data property from state', () => {
    expect(getDataSelector(state)).toEqual([
      {
        title: 'Title 1',
      },
    ]);
  });
});
