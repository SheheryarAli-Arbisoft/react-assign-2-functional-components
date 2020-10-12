import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.object,
};

const chartPropTypes = {
  labels: PropTypes.array.isRequired,
  forecastData: PropTypes.array.isRequired,
  defaultStyles: PropTypes.object.isRequired,
  defaultOptions: PropTypes.object.isRequired,
};

const defaultProps = {};

const chartDefaultProps = {
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
  },
  defaultOptions: {
    legend: {
      display: false,
    },
    responsive: false,
    maintainAspectRatio: false,
  },
};

export { propTypes, chartPropTypes, defaultProps, chartDefaultProps };
