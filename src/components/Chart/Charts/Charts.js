import React from 'react';
import { propTypes, defaultProps } from './props';
import { ChartContainer } from '../ChartContainer';
import { ChartOuterWrapper } from '../ChartOuterWrapper';
import { TempChart } from '../TempChart';
import { PressureChart } from '../PressureChart';
import { HumidityChart } from '../HumidityChart';
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
