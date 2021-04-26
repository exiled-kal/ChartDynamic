import React, { useState } from 'react';
import {Pie} from 'react-chartjs-2';
import {getPiedata} from '../data/apiData';

const Pies = () => {
  const [labelsData, setLabelsData] = useState(0);

  const data = (canvas) => {

  }
  const options = {

  }
  return (
    <div>
      <Pie data={data} options={/>
    </div>
  );
};

export default Pies;
