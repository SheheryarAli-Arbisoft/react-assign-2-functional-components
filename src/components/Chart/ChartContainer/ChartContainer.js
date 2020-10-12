import React from 'react';

import { ChartContainer as CustomChartContainer } from './styled';

import { propTypes, defaultProps } from './props';

export const ChartContainer = ({ children }) => {
  return <CustomChartContainer>{children}</CustomChartContainer>;
};

ChartContainer.propTypes = propTypes;
ChartContainer.defaultProps = defaultProps;
