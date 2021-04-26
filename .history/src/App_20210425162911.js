import {useEffect, useState} from 'react';

import './App.css';

import TableChart from './components/TableChart';

import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const url = 'https://github.com/exiled-kal/csvprac/blob/main/data1.json';

  useEffect(() => {
    axios
      .get('https://github.com/exiled-kal/csvprac/blob/main/data1.json')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="App">
      <TableChart data={data} />
    </div>
  );
}

export default App;
