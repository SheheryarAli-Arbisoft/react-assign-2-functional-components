import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';

import { ChartInnerWrapper } from '../ChartInnerWrapper';
import { Text } from '../../Text';

import { chartPropTypes, chartDefaultProps } from './props';

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
        backgroundColor: 'rgba(0,0,255,0.4)',
        borderColor: 'rgba(0,0,255,1)',
        pointBorderColor: 'rgba(0,0,255,1)',
        pointHoverBackgroundColor: 'rgba(0,0,255,1)',
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
          options={{
            ...defaultOptions,
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Pressure (hPa)',
                  },
                  ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 1500,
                    stepSize: 300,
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

PressureChart.propTypes = chartPropTypes;
PressureChart.defaultProps = chartDefaultProps;
