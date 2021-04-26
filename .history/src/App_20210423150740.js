import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Bars from './components/Bars';
import Pie from './components/Pie';
import TableChart from './components/TableChart';

function App() {
  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  const [data, setData] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="App">
      <TableChart data={data} />
      {/* <Bars data={data} /> */}
      <Pie />
    </div>
  );
}

export default App;
