import {FormControl, NativeSelect} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
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

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#ff0000',
  '#FF8050',
  '#FF8123',
  '#FF1986',
];

const OptionChart = ({data}) => {
  return (
    <div style={{textAlign: 'center'}}>
      <h2>QPP Chart</h2>
      <br />

      

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

export default OptionChart;