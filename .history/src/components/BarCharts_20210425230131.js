import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';

const BarCharts = ({data}) => {
  const [chart, setChart] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://corona.lmao.ninja/v2/historical/pakistan`
      );

      setChart({
        labels: Object.keys(res.data.timeline.cases),
        datasets: [
          {
            label: "Covid-19",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: Object.values(data[0])
          }
        ]
      });
    } catch (error) {
      console.log(error.response);
    }
  return (
    <div>
      <h4>BarChart of QPP</h4>
      <br />
      <Bar
        data={data}
        options={{responsive: true, height: '600px', width: '600px'}}
      />
    </div>
  );
};

export default BarCharts;
