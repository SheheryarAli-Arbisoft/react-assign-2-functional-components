// Get the loading property from the weather state
const getLoadingSelector = state => state.weather.loading;

// Get the data property from the weather state
const getDataSelector = state => state.weather.data;

export { getLoadingSelector, getDataSelector };
