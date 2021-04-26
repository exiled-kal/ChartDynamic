import React, {useEffect, useState} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchLabels} from '../data/apiData';
import styles from './DataPicker.module.css';

const DataPicker = ({handleLabelChange}) => {
  const [fetchedLabels, setFetchedLabels] = useState([]);

   useEffect(() => {
    fetch('https://github.com/exiled-kal/csvprac/blob/main/data1.json')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleLabelChange(e.target.value)}
        >
          {fetchLabels.map((label, i) => (
            <option key={i} value={label}>
              {label}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default DataPicker;
