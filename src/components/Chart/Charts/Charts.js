import React from 'react';
import { propTypes, defaultProps } from './props';
import {
  ChartOuterWrapper,
  TempChart,
  PressureChart,
  HumidityChart,
} from '../components/Chart';
import { ChartContainer } from '../ChartContainer';
import { generateLabels } from '../../../utils';

export const Charts = ({ forecastData }) => {
  // Generating the labels which will be passed down to the charts
  const labels = generateLabels(forecastData);

  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
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
  );
};

Charts.propTypes = propTypes;
Charts.defaultProps = defaultProps;