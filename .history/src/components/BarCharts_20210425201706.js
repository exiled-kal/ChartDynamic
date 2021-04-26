import axios from 'axios';
import React, {useEffect, useState} from 'react';

const BarCharts = ({data}) => {
  const [lablesVal, setLablesVal] = useState([]);

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 90, 100, 0);
    const gradient1 = ctx.createLinearGradient(0, 90, 100, 0);
    gradient.addColorStop(0, '#ff9a9e');
    gradient.addColorStop(0.5, '#fad0c4');
    gradient.addColorStop(1, '#fad0c4');

    gradient1.addColorStop(0, '#B7F8DB');
    gradient1.addColorStop(0.5, '#50A7C2');
    gradient1.addColorStop(1, '#B7F8DB');

    return {
        labels: lablesData,
        datasets: [
            {
                barPercentage: 0.5,
                barThickness: 10,
                maxBarThickness: 100,
                minBarLength: 2,
                label: {(e) => setL},
                data: confirmedData,
                backgroundColor: gradient1,
                borderWidth: 1
            },
            {
                barPercentage: 0.5,
                barThickness: 10,
                maxBarThickness: 100,
                minBarLength: 2,
                label: 'Deaths',
                data: deathsData,
                backgroundColor: gradient,
                borderWidth: 1
            }
        ]
    }
}
const options = {
    responsive: true,
    tooltips: {
        mode: 'index',
        intersect: false,
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: true,
        position: 'bottom',
        labels: {
            fontColor: 'rgba(242, 38, 19, 1)'
        }
    },
}
  

  return (
    <div>
      
    </div>
  );
};

export default BarCharts;
