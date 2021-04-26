import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Charts = ({data}) => {
  const [chart, setChart] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await axios.get(
        'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json'
      );
      setChart({
        labels: Object.keys(data[0]),
        datasets: [
          {
            label: 'MTBF',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: Object.values(data[0]),
          },
        ],
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  return <div>
    <Bar
  </div>;
};

export default Charts;
