import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Bars from './components/Bars';
import Pie from './components/Pie';
import TableChart from './components/TableChart';

function App() {
  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data.json';

  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="App">
      <TableChart data={data} />
      <Bars data={data} />
    </div>
  );
}

export default App;
