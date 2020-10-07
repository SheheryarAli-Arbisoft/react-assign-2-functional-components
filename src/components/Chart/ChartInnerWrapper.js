import React from 'react';

import { ChartInnerWrapper as CustomChartInnerWrapper } from './styled';

const ChartInnerWrapper = ({ children }) => {
  return <CustomChartInnerWrapper>{children}</CustomChartInnerWrapper>;
};

export default ChartInnerWrapper;
