import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.array,
  weather: PropTypes.object.isRequired,
};

export const defaultProps = {
  children: [],
};
