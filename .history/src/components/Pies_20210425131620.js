import React from 'react';
import {Pie} from 'react-chartjs-2';
import {getPiedata} from '../data/apiData';

const Pies = () => {
  const [labelsData, setLabelsData] = useState([]);
  return (
    <div>
      <Pie />
    </div>
  );
};

export default Pies;
