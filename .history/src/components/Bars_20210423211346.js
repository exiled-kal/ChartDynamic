import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';

const Bars = ({data: {LotID,ProductType,StartDateTime,SystemUpTime,OperationTime, DownTime, IdleTime,MTBF,MTBA, TotalQuantityIn,TotalQuantityOut, TotalPassed, Tota}}) => {
  const [data, setData] = useState([]);

  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data.json';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div
      style={{width: '50$%', height: '400px', backgroundColor: 'antiquewhite'}}
    >
      <h4>BarChart of QPP</h4>
      <br />
      <Bar></Bar>
    </div>
  );
};

export default Bars;
