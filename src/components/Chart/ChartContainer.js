import React from 'react';

import { ChartContainer as CustomChartContainer } from './styled';

const ChartContainer = ({ children }) => {
  return <CustomChartContainer>{children}</CustomChartContainer>;
};

export default ChartContainer;
