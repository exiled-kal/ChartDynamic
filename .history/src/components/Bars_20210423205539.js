import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';

const Bars = (data) => {
  //   const [data, setData] = useState('');

  //   const url =
  //     'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  //   useEffect(() => {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((json) => setData(json));
  //   }, []);
  const Labels = data.data.map((lab) => lab.sub);

  const ChartData = {
    Labels: Labels,
    datasets: [{}],
  };
  return (
    <div style={{width: '50$%', height:"400px", backgroundColor:"anti"}}>
      <h4>BarChart of QPP</h4>
      <br />
      <Bar></Bar>
    </div>
  );
};

export default Bars;
