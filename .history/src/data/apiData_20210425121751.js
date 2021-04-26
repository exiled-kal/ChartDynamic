import axios from 'axios';

const baseUrl =
  'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

export const getdata = async () => {
  try {
    const {data} = await axios.get(baseUrl);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getPiedata = async () => {
  try {
    const {data} = await axios.get(baseUrl);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getBardata = async () => {
  try {
    const {data} = await axios.get(baseUrl);
    return data;
  } catch (error) {
    throw error;
  }
};
