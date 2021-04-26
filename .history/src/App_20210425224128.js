import {useEffect, useState} from 'react';

import './App.css';
import Charts from './components/Charts';

import TableChart from './components/TableChart';

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
      <TableChart data={data} />
      <Charts data={data} />
    </div>
  );
}

export default App;
