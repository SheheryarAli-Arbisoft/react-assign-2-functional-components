import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';

import { ChartInnerWrapper } from './ChartInnerWrapper';
import { SubTitle } from '../Text';

import { chartPropTypes, chartDefaultProps } from './props';

export const HumidityChart = ({
  labels,
  forecastData,
  defaultStyles,
  defaultOptions,
}) => {
  // eslint-disable-next-line no-shadow
  const generateHumidityData = forecastData => {
    const result = [];

    forecastData.forEach(forecast => result.push(forecast.humidity));

    return result;
  };

  const getData = () => ({
    labels,
    datasets: [
      {
        ...defaultStyles,
        backgroundColor: 'rgba(0,255,0,0.4)',
        borderColor: 'rgba(0,255,0,1)',
        pointBorderColor: 'rgba(0,255,0,1)',
        pointHoverBackgroundColor: 'rgba(0,255,0,1)',
        data: generateHumidityData(forecastData),
      },
    ],
  });

  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Fragment>
      <SubTitle>Humidity</SubTitle>
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
                    labelString: 'Humidity (%)',
                  },
                  ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    stepSize: 50,
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

HumidityChart.propTypes = chartPropTypes;
HumidityChart.defaultProps = chartDefaultProps;
