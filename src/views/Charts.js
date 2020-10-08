import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { generateLabels } from '../utils';

import {
  ChartContainer,
  ChartOuterWrapper,
  TempChart,
  PressureChart,
  HumidityChart,
} from '../components/Chart';

export const Charts = ({ forecastData }) => {
  // Generating the labels which will be passed down to the charts
  const labels = generateLabels(forecastData);

  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Fragment>
      <ChartContainer>
        <ChartOuterWrapper>
          <TempChart labels={labels} forecastData={forecastData} />
        </ChartOuterWrapper>
        <ChartOuterWrapper>
          <PressureChart labels={labels} forecastData={forecastData} />
        </ChartOuterWrapper>
        <ChartOuterWrapper>
          <HumidityChart labels={labels} forecastData={forecastData} />
        </ChartOuterWrapper>
      </ChartContainer>
    </Fragment>
  );
};

Charts.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  forecastData: PropTypes.array.isRequired,
};
