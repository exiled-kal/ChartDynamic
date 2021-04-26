import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';

const Bars = () => {
  const [bars, setBars] = useState([]);


  const Labels = data[0] && Object.keys(data[0]);

  return (
    <div>
      <Bar 
        data= {{
          labels: Labels,
        }}
      />
    </div>
  );
};

export default Bars;
