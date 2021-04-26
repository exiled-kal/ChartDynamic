import {FormControl, NativeSelect} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import Bars from './Bars';

const OptionChart = ({handleDataChange, data}) => {
  return <div style={{textAlign: 'center'}}>
  <h2>QPP Chart</h2>
  <br />
  <div className="App">
    <h4>PieChart Of QPP</h4>
    <div className="pieChart__display">
      <PieChart width={800} height={500}>
        <Pie
          dataKey="MTBF"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label={true}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>

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
  </div>;
};

export default OptionChart;
