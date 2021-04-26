import {useEffect, useState} from 'react';

import './App.css';
import Bars from './components/Bars';
import OptionChart from './components/OptionChart';
import TableChart from './components/TableChart';

function App() {
  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="App">
      <TableChart data={data} />
      <B
    </div>
  );
}

export default App;
