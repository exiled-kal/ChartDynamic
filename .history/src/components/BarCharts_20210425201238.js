import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {navigate} from '@reach/router';

const BarCharts = ({data}) => {
  const [inputVal, setInputVal] = useState('');

  
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          {data}
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
        <button onClick={(handleSearch) => navigate('/')}>Search</button>
      </div>
    </div>
  );
};

export default BarCharts;
