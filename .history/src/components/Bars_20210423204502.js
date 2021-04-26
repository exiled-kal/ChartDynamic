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

const Bars = (data) => {
  //   const [data, setData] = useState('');

  //   const url =
  //     'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  //   useEffect(() => {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((json) => setData(json));
  //   }, []);
  const labels = data.data.map((lab) => lab.sub);
  const dataVal = data.data.map()
  return (
    <div>
      <h4>BarChart of QPP</h4>
      <br />
    </div>
  );
};

export default Bars;
