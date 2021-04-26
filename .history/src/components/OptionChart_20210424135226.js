import {FormControl, NativeSelect} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import Bars from './Bars';

const OptionChart = ({data: data}) => {
  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';
  const [fetchDatas, setFetchDatas] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchDatas(await url);
    };
    fetchAPI();
  }, []);
  return (
    <div>
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleDataChange(e.target.value)}
        >
          <option value="">Chart Type</option>
          {fetchDatas.map((data, i) => (
            <option key={i} value={data}>
              {data}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default OptionChart;
