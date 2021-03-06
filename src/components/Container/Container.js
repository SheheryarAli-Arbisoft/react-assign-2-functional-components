import React from 'react';
import { Container as CustomContainer } from './styled';
import { propTypes, defaultProps } from './props';

export const Container = ({ children, ...rest }) => {
  return <CustomContainer {...rest}>{children}</CustomContainer>;
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
