import React, {useState, useEffect} from 'react';

import {Bar} from 'react-chartjs-2';
import {getdata} from '../data/apiData';

const Bars = () => {
  const [labelsData, setLabelsData] = useState([]);

  const data = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 90, 100, 0);
    const gradient1 = ctx.createLinearGradient(0, 90, 100, 0);
    gradient.addColorStop(0, '#ff9a9e');
    gradient.addColorStop(0.5, '#fad0c4');
    gradient.addColorStop(1, '#fad0c4');

    gradient1.addColorStop(0, '#B7F8DB');
    gradient1.addColorStop(0.5, '#50A7C2');
    gradient1.addColorStop(1, '#B7F8DB');

    return {
      labels: labelsData,
      datasets: [
        {
          barPercentage: 0.5,
          barThickness: 10,
          maxBarThickness: 100,
          minBarLength: 2,
          label: `{${labelsData}}`,
          label: `{${labelsData}}`,
          data: labelsData,
          backgroundColor: gradient1,
          borderWidth: 1,
        },
      ],
    };
  };
  const options = {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: 'rgba(242, 38, 19, 1)',
      },
    },
  };
  const getChartData = async () => {
    try {
      let labelsArray = [];
      const data = await getdata();
      data.forEach((element) => {
        labelsArray.push(element.labels);
      });
      setLabelsData(labelsArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChartData();
  }, []);
  return <Bar data={data} options={options} />;
};

export default Bars;
