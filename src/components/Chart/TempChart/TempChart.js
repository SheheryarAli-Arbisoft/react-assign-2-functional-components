import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';

import { ChartInnerWrapper } from '../ChartInnerWrapper';
import { Text } from '../../Text';

import { chartPropTypes, chartDefaultProps } from './props';

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
        backgroundColor: 'rgba(255,0,0,0.4)',
        borderColor: 'rgba(255,0,0,1)',
        pointBorderColor: 'rgba(255,0,0,1)',
        pointHoverBackgroundColor: 'rgba(255,0,0,1)',
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
          options={{
            ...defaultOptions,
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Temperature (°C)',
                  },
                  ticks: {
                    stepSize: 10,
                  },
                },
              ],
            },
          }}
        />
      </ChartInnerWrapper>
    </Fragment>
  );
};

TempChart.propTypes = chartPropTypes;
TempChart.defaultProps = chartDefaultProps;
