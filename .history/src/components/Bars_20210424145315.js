import axios from 'axios';
import React, {useEffect, useState} from 'react';
// import {Bar} from 'react-chartjs-2';
import {
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';

const Bars = ({data}) => {
  const [bars, setBars] = useState([]);

  const barTitle = data[0] && Object.keys(data[0]);

  return (
    <div>
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
            dataKey={`${index}`}
            scale="point"
            padding={{left: 10, right: 10}}
          />
        ))}

        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        {data.map((entry, index) => (
          <Bar
            dataKey={`${index}`}
            scale="point"
            padding={{left: 10, right: 10}}
          />
        ))}
      </BarChart>
    </div>
  );
};

export default Bars;
