import {useEffect, useState} from 'react';
import {getdata, baseUrl} from './data/apiData';
import './App.css';

import TableChart from './components/TableChart';

function App() {
  const url =getdata()
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch()
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
