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
    fetch(url)
      .then((response) => response.json())
      .then((json) => setLablesVal(json));
  }, []);

  return (
    <div>
      <h4>BarChart of QPP</h4>
      <br />
      <BarChart
        width={900}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 30,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis
          dataKey="StartDateTime"
          scale="point"
          padding={{left: 10, right: 10}}
        />

        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="MTBF" fill="#8884d8" background={{fill: '#eee'}} />
      </BarChart>
    </div>
  );
};

export default BarCharts;
