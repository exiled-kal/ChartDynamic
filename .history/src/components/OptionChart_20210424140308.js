import {FormControl, NativeSelect} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import Bars from './Bars';

const OptionChart = ({handleDataChange}) => {
  const data =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  const [fetchDatas, setFetchDatas] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchDatas(await data);
    };
    fetchAPI();
    
  }, []);
  return <div></div>;
};

export default OptionChart;
