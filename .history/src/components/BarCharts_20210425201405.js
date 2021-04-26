import axios from 'axios';
import React, {useEffect, useState} from 'react';

const BarCharts = ({data}) => {
  const [lablesVal, setLablesVal] = useState([]);

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
