import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Cell,
} from 'recharts';

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
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 136, 0.5)',
                'rgba(255, 0, 0, 0.5)',
              ],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: {display: false},
          title: {
            display: true,
            
            text: `Current status in ${country}`,
          },
        }}
      />
    </div>
  );
};

export default BarCharts;
