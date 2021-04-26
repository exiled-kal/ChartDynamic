import { FormControl, NativeSelect } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import Bars from './Bars';

const OptionChart = () => {
  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';
  const [fetchDatas, setFetchDatas] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchDatas(await fetchDatas);
    };
    fetchAPI();
  }, [setFetchDatas]);
  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Around the world</option>
          {fetchData.map((data, i) => (
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
