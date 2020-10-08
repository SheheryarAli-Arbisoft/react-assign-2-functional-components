import React from 'react';

import { Heading as CustomHeading } from './styled';

import { propTypes, defaultProps } from './props';

export const Heading = ({ children }) => {
  return <CustomHeading>{children}</CustomHeading>;
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;
