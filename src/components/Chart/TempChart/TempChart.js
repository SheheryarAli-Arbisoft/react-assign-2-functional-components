import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartInnerWrapper } from '../ChartInnerWrapper';
import { Text } from '../../Text';
import { propTypes, defaultProps } from './props';

export const TempChart = ({
  labels,
  forecastData,
  defaultStyles,
  defaultOptions,
}) => {
  // eslint-disable-next-line no-shadow
  const generateTempData = forecastData => {
    const result = [];

    forecastData.forEach(forecast =>
      result.push(Math.ceil(forecast.temp - 273))
    );

    return result;
  };

  const getData = () => ({
    labels,
    datasets: [
      {
        ...defaultStyles,
        data: generateTempData(forecastData),
      },
    ],
  });

  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Fragment>
      <Text variant='subtitle'>Temperature</Text>
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

TempChart.propTypes = propTypes;
TempChart.defaultProps = defaultProps;
