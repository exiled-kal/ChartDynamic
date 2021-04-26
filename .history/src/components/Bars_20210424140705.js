import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';

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
      <Bar 
        data=
      />
    </div>
  );
};

export default Bars;
