import PropTypes from 'prop-types';

export const propTypes = {
  labels: PropTypes.array.isRequired,
  forecastData: PropTypes.array.isRequired,
  defaultStyles: PropTypes.object.isRequired,
  defaultOptions: PropTypes.object.isRequired,
};

export const defaultProps = {
  defaultStyles: {
    lineTension: 0.1,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBackgroundColor: '#ffffff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    pointHitRadius: 10,
    backgroundColor: 'rgba(255,0,0,0.4)',
    borderColor: 'rgba(255,0,0,1)',
    pointBorderColor: 'rgba(255,0,0,1)',
    pointHoverBackgroundColor: 'rgba(255,0,0,1)',
  },
  defaultOptions: {
    legend: {
      display: false,
    },
    responsive: false,
    maintainAspectRatio: false,
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
  },
};
