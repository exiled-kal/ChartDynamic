import React, {useEffect, useState} from 'react';
import {
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';

const Bars = () => {
  const [data, setData] = useState('');

  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      T<h4>BarChart of QPP</h4>
      <br />
      <BarChart
      keys='idx'
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
        <Bar dataKey={data} fill="#8884d8" background={{fill: '#eee'}} />
      </BarChart>
    </div>
  );
};

export default Bars;
