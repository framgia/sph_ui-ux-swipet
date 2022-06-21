import EChart from '../../../components/shared/EChart';

const PlacesStaticAnalytics = () => {
  const option = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    series: [
      {
        type: 'pie',
        name: 'Location',
        radius: '65%',
        center: ['55%', '40%'],
        selectedMode: 'single',
        data: [
          { value: 1548, name: 'CityF' },
          { value: 150, name: 'CityE' },
          { value: 120, name: 'CityD' },
          { value: 510, name: 'CityC' },
          { value: 710, name: 'CityB' },
          { value: 335, name: 'CityA' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return <EChart option={option} />;
};

export default PlacesStaticAnalytics;
