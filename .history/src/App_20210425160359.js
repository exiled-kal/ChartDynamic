import {useEffect, useState} from 'react';
import {getdata, baseUrl} from './data/apiData';
import './App.css';

import TableChart from './components/TableChart';

function App() {
  const [data, setData] = useState([]);

  const url = 'https://github.com/exiled-kal/csvprac/blob/main/data1.json';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [DATA]);
  return (
    <div className="App">
      <TableChart data={data} />
    </div>
  );
}

export default App;
