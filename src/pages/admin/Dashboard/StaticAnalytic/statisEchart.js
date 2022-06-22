import EChart from '../../../components/shared/EChart';

const StaticEchart = ({ data }) => {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#D8782E',
        },
      },
    },
    legend: {
      data: [`${data}`],
    },
    grid: {
      left: '3%',
      right: '0%',
      bottom: '4%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Nov'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Most Registered',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [350, 300, 360, 350, 190, 220, 240, 190, 450, 150],
        color: '#4AE2A2',
      },
      {
        name: 'Not yet Verified',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [350, 290, 50, 455, 60, 455, 390, 350, 50, 300],
        color: '#F45B4A',
      },
      {
        name: 'Verified',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [290, 280, 460, 200, 150, 300, 350, 230, 350, 400],
        color: '#3E59A0',
      },
    ],
  };

  return <EChart option={option} />;
};

export default StaticEchart;
