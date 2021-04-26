import axios from 'axios';

const url =
  'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

export const fetchData = async (data) => {
  try {
    const {data} = await axios.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};
