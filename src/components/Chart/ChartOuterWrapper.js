import React from 'react';

import { ChartOuterWrapper as CustomChartOuterWrapper } from './styled';

import { propTypes, defaultProps } from './props';

export const ChartOuterWrapper = ({ children }) => {
  return <CustomChartOuterWrapper>{children}</CustomChartOuterWrapper>;
};

ChartOuterWrapper.propTypes = propTypes;
ChartOuterWrapper.defaultProps = defaultProps;
