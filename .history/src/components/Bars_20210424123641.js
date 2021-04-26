import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Bars = () => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json'
      )
      .then((response) => setBars(response.data));
  }, []);

  if (bars === null) return 'Loading.....';
  return <div></div>;
};

export default Bars;
