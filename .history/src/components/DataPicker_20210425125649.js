import React, {useEffect, useState} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchLabels} from '../data/apiData';

const DataPicker = ({handleLabelChange}) => {
  const [fetchedLabels, setFetchedLabels] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedLabels(await fetchLabels());
    };
    fetchAPI();
  }, [setFetchedLabels]);
  return <div>
        <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Around the world</option>
                    {fetchLabels.map((label,i) => <option key={i}value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
  </div>;
};

export default DataPicker;
