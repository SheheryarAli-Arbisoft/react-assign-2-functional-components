import React from 'react';

import { ChartOuterWrapper as CustomChartOuterWrapper } from './styled';

const ChartOuterWrapper = ({ children }) => {
  return <CustomChartOuterWrapper>{children}</CustomChartOuterWrapper>;
};

export default ChartOuterWrapper;
