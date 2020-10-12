import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartInnerWrapper } from '../ChartInnerWrapper';
import { Text } from '../../Text';
import { propTypes, defaultProps } from './props';

export const PressureChart = ({
  labels,
  forecastData,
  defaultStyles,
  defaultOptions,
}) => {
  // eslint-disable-next-line no-shadow
  const generatePressureData = forecastData => {
    const result = [];

    forecastData.forEach(forecast => result.push(forecast.pressure));

    return result;
  };

  const getData = () => ({
    labels,
    datasets: [
      {
        ...defaultStyles,
        data: generatePressureData(forecastData),
      },
    ],
  });

  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Fragment>
      <Text variant='subtitle'>Pressure</Text>
      <ChartInnerWrapper>
        <Line
          width={3200}
          height={250}
          data={getData()}
          options={defaultOptions}
        />
      </ChartInnerWrapper>
    </Fragment>
  );
};

PressureChart.propTypes = propTypes;
PressureChart.defaultProps = defaultProps;
