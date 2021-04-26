import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';

const Bars = () => {
  const [data, setData] = useState([]);

  //   const url =
  //     'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  //   useEffect(() => {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((json) => setData(json));
  //   }, []);

  const ChartData = {
    Labels: Labels,
    datasets: [
      {
        data: {data},
      },
    ],
  };
  return (
    <div
      style={{width: '50$%', height: '400px', backgroundColor: 'antiquewhite'}}
    >
      <h4>BarChart of QPP</h4>
      <br />
      <Bar></Bar>
    </div>
  );
};

export default Bars;
