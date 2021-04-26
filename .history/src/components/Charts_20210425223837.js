import React, { useEffect } from 'react';




const Charts = () => {
  const [chart, setChart] 

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await axios.get(
        'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json'
      );
      setData({
        labels: Object.keys(data[0]),
        datasets: [
          {
            label: 'MTBF',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: Object.values(data[0]),
          },
        ],
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div>
      
    </div>
  );
}

export default Charts;
