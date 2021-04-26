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
} from 'recharts';

const BarCharts = ({data}) => {
  const [chart, setChart] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(
      `https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json`
    );
  };

  return (
    <div>
      <h4>BarChart of QPP</h4>
      <br />
      <BarChart
        width={900}
        height={400}
        data={Object.keys({data}[0])}
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
