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
  return <div></div>;
};

export default DataPicker;
