import {useEffect, useState} from 'react';
import {BrowseRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
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
      <Router>
        <TableChart data={data} />
        <Switch
      </Router>
    </div>
  );
}

export default App;
