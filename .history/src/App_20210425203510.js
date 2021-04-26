import {useEffect, useState} from 'react';

import './App.css';

import TableChart from './components/TableChart';

import axios from 'axios';
import BarCharts from './components/BarCharts';

function App() {
  const [data, setData] = useState([]);

  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="App">
      {/* <TableChart data={data} /> */}
      <BarCharts data={data} />
    </div>
  );
}

export default App;
