import React, {useEffect, useState} from 'react';
import {Bar, Pie} from 'react-chartjs-2';

const Bars = ({
  data: {
      data
    // LotID,
    // ProductType,
    // StartDateTime,
    // SystemUpTime,
    // OperationTime,
    // DownTime,
    // IdleTime,
    // MTBF,
    // MTBA,
    // TotalQuantityIn,
    // TotalQuantityOut,
    // TotalPassed,
    // TotalFailed,
    // TotalYield,
    // SoftJam,
    // HardJam,
    // SprintUPH,
  },
}) => {
  const [fetchdata, setFetchData] = useState([]);
  const Labels = fetchdata.map(({data}) => data);

  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data.json';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setFetchData(json));
  }, []);
  cl

  return (
    <div
      style={{width: '50$%', height: '400px', backgroundColor: 'antiquewhite'}}
    >
      const pieChart = fetchdata.length ? (
      <Pie
        data={{
          Labels: Labels,
          datasets: [
            {
              data: fetchdata.map,
            },
          ],
        }}
      />
      ):null
    </div>
  );
};

export default Bars;
