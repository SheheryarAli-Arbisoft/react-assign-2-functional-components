import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
};

export const defaultProps = {
  children: [],
};
