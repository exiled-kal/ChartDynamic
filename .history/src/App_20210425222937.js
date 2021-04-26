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
try {
  const 
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
