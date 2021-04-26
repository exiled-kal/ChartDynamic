import {useEffect, useState} from 'react';
import {getdata, baseUrl} from './data/apiData';
import './App.css';

import TableChart from './components/TableChart';

function App() {
  const [data, setData] = useState([]);

  // const url = 'https://github.com/exiled-kal/csvprac/blob/main/data1.json';

  useEffect(() => {
    fetch('https://github.com/exiled-kal/csvprac/blob/main/data1.json')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="App">
      <TableChart data={data} />
      <DataPicker
    </div>
  );
}

export default App;
