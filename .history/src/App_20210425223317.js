import {useEffect, useState} from 'react';

import './App.css';

import TableChart from './components/TableChart';

import axios from 'axios';
import BarCharts from './components/BarCharts';
import {getDefaultNormalizer} from '@testing-library/dom';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
try {
  const data = await axios.get(
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json'
  )
  setData({
    labels: [data[0] && Object.keys(data[0])],
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
        data: [data[0] && Object.keys(data[0])]
  })
} catch (error) {
  
}
  
    
  }
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, []);
  return (
    <div className="App">
      <TableChart data={data} />
    </div>
  );
}

export default App;
