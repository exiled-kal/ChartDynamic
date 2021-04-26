import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';

const Bars = ({data}) => {
  const [bars, setBars] = useState([]);

  const Labels = data[0] && Object.keys(data[0]);

  return (
    <div>
      <Bar
        data={{
          labels: Labels,
          datasets: [
            {
              label: 'data',
            backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 136, 0.5)',
                'rgba(255, 0, 0, 0.5)',
            }
          ],

        }}
      />
    </div>
  );
};

export default Bars;
