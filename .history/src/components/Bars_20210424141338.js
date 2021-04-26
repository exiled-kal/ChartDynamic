import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';

const Bars = () => {
  const [bars, setBars] = useState([]);


  const columns = data[0] && Object.keys(data[0]);

  return (
    <div>
      <Bar 
        data= {{
          labels: []
        }}
      />
    </div>
  );
};

export default Bars;
