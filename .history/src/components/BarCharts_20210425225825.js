import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';

const BarCharts = ({data}) => {
  const [lablesVal, setLablesVal] = useState([]);

  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setLablesVal(data));
  }, []);

  return (
    <div>
      <h4>BarChart of QPP</h4>
      <br />
      <Bar
        data={{
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
            data: Object.values(data[0])
            /
    </div>
  );
};

export default BarCharts;
