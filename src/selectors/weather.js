import { createSelector } from 'reselect';

// Get the loading property from the weather state
const getLoadingSelector = createSelector(
  state => state.weather.loading,
  loading => loading
);

// Get the data property from the weather state
const getDataSelector = createSelector(
  state => state.weather.data,
  data => data
);

export { getLoadingSelector, getDataSelector };
