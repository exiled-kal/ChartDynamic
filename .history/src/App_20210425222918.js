import {useEffect, useState} from 'react';

import './App.css';

import TableChart from './components/TableChart';

import axios from 'axios';
import BarCharts from './components/BarCharts';
import {getDefaultNormalizer} from '@testing-library/dom';

function App() {
  const [chart, setChart] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {

  
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';
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
