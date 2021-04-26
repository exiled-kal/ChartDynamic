import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { navigate } from '@reach/router';

const BarCharts = ({data}, {id}) => {
  const [inputVal, setInputVal] = useState('');

  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  useEffect(() => {
    axios.get({data}).then((response) => setInputVal(response.data));
    console.log(inputVal);
  }, []);
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          Search for:
          <select>
            <option
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            >
              {data}
            </option>
            <option
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            >
              {data}
            </option>
          </select>
        </div>
      </form>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            ID :
            <select>
              <option value={id}></option>
            </select>
          </div>
        </form>
        <button onClick={(handleSearch) => navigate('/:word/:id')}>Search</button>
      </div>
    </div>
  );
};

export default BarCharts;
