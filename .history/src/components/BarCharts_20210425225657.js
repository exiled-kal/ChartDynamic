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
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 136, 0.5)',
                'rgba(255, 0, 0, 0.5)',
              ],
              data: Object.values(data[0]),
            },
          ],
        }}
        options={{
          legend: {display: false},
          title: {
            display: true,

            text: `Current status in ${data}`,
          },
        }}
      />
    </div>
  );
};

export default BarCharts;
