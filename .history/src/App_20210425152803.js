import {useEffect, useState} from 'react';
import {getdata} from './'
import './App.css';

import TableChart from './components/TableChart';

function App() {
  

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(getdata)
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
