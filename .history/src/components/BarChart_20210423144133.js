import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Cell,
} from 'recharts';

const BarChart = () => {
  return <div>T<h4>BarChart of QPP</h4>
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
  </BarChart></div>;
};

export default BarChart;
