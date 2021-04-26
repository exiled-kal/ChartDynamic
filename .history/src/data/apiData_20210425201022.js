import axios from 'axios';

const url =
  'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  export const getPieData = async () => {
      try {
          const {data} = await axios.get(url)
          return data
      } catch (error) {
          
      }
  }