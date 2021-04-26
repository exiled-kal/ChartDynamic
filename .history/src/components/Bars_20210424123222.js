import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Bars = () => {
  const [bar, setBar] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json'
      )
      .then((response) => setBar(response.data));
  }, []);

  if()
  return <div></div>;
};

export default Bars;
