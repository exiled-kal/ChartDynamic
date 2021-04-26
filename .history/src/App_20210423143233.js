import {useEffect, useState} from 'react';
import './App.css';
import TableChart from './components/TableChart';
import {api} from './'

function App() {
  // const url =
  //   'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  const [data, setData] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    fetch(api)
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
