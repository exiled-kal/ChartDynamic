import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

const Bars = () => {
  const [bars, setBars] = useState([]);

  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  useEffect(() => {
    axios.get(url).then((response) => setBars(response.data));
  }, []);

  if (bars === null) return 'Loading.....';

  return (
    <div>
      <BarChart width={600} height={300} data={url}>
        <XAxis dataKey="" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{width: 100, backgroundColor: '#ccc'}} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: '#f5f5f5',
            border: '1px solid #d5d5d5',
            borderRadius: 3,
            lineHeight: '40px',
          }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
};

export default Bars;
