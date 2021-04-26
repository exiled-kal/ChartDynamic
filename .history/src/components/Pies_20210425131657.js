import React, { useState } from 'react';
import {Pie} from 'react-chartjs-2';
import {getPiedata} from '../data/apiData';

const Pies = () => {
  const [labelsData, setLabelsData] = useState(0);

  const data = (canvas) => {

  }
  
  return (
    <div>
      <Pie />
    </div>
  );
};

export default Pies;
