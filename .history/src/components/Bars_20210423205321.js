import React, {useEffect, useState} from 'react';


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
    <div>
      <h4>BarChart of QPP</h4>
      <br />
      <Bar></Bar>
    </div>
  );
};

export default Bars;
