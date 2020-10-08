import React from 'react';

import { ChartInnerWrapper as CustomChartInnerWrapper } from './styled';

import { propTypes, defaultProps } from './props';

export const ChartInnerWrapper = ({ children }) => {
  return <CustomChartInnerWrapper>{children}</CustomChartInnerWrapper>;
};

ChartInnerWrapper.propTypes = propTypes;
ChartInnerWrapper.defaultProps = defaultProps;
