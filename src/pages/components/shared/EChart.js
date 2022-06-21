import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const EChart = ({ option, resize }) => {
  const chart = useRef(null);
  const [chartEl, setChartEl] = useState(chart);

  useEffect(() => {
    if (resize) {
      chartEl.resize();
    }
    if (!chartEl.current) {
      chartEl.setOption(option);
    } else {
      setChartEl(echarts.init(chart.current));
    }
  }, [option, chartEl, resize]);

  return <div className='h-full w-full' ref={chart} />;
};

export default EChart;
