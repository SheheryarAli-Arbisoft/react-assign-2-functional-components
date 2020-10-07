import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Navbar from './views/Navbar';
import SearchForm from './views/SearchForm';
import WeatherList from './views/WeatherList';

import { Container } from './components/Container';
import { Heading } from './components/Text';

import store from './store';
import theme from './theme';

import './App.css';

const App = () => {
  return (
    /* eslint-disable react/jsx-filename-extension */
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <Heading>
            <i className='fas fa-cloud-sun-rain' />
            Weather App
          </Heading>
          <SearchForm />
          <WeatherList />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
