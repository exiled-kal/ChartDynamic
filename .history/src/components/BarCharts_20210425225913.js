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
      <B ar
        
            />
    </div>
  );
};

export default BarCharts;
