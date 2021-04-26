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
export const fetchLabel = async (label) => {
    try {
        const {
            data: {labels}
        } = await axios.get(`${url}/labels`)
        return labels.map((label) =>)
    } catch (error) {
        
    }

}
