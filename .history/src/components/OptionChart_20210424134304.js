import React, {useEffect, useState} from 'react';
import Bars from './Bars';

const OptionChart = () => {
  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchData(await fetchDatas);
    };
    fetchAPI();
  }, [setFetchDatas]);
  return <div></div>;
};

export default OptionChart;
