import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';

const BarCharts = ({data}) => {
  const [lablesVal, setLablesVal] = useState([]);

  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setLablesVal(data));
  }, []);

  return (
    <div>
      <h4>BarChart of QPP</h4>
      <br />
      <Bar
        data={data}
        options={{responsive: true, height: '600px', width: '600px'}}
      />
    </div>
  );
};

export default BarCharts;
