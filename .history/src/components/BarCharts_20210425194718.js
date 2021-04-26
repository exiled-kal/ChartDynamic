import axios from 'axios';
import React, {useEffect, useState} from 'react';

const BarCharts = ({data}, {id}) => {
  const [inputVal, setInputVal] = useState('');

  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  useEffect(() => {
axios.get({data})
.then((response) => setInputVal)
  },[])
  return <div></div>;
};

export default BarCharts;
