  
import React, {useState, useEffect} from 'react';

import {Bar} from 'react-chartjs-2';
import {getdata} from '../data/apiData';

const Bars = () => {
  const [lablesData, setLabelsData] = useState([]);

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 90, 100, 0);
    const gradient1 = ctx.createLinearGradient(0, 90, 100, 0);
    gradient.addColorStop(0, '#ff9a9e');
    gradient.addColorStop(0.5, '#fad0c4');
    gradient.addColorStop(1, '#fad0c4');

    gradient1.addColorStop(0, '#B7F8DB');
    gradient1.addColorStop(0.5, '#50A7C2');
    gradient1.addColorStop(1, '#B7F8DB');

return {
  labels: lablesData,
  data
}
}