import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';

const BarCharts = ({data}) => {
  const [chart, setChart] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(
      `https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json`
    );
  };

  return (
    <div>
      <h4>BarChart of QPP</h4>
      <br />
      data
    </div>
  );
};

export default BarCharts;