import React, {useEffect, useState} from 'react';
import Bars from './Bars';

const OptionChart = () => {
  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';
  const [fetchDatas, setFetchDatas] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchData(await fetchData);
    };
    fetchAPI();
  }, [setFetchData]);
  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Around the world</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default OptionChart;
