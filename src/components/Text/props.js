import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.any,
  small: PropTypes.bool,
  variant: PropTypes.string,
};

export const defaultProps = {
  small: false,
  variant: '',
};
