import axios from 'axios';

const baseUrl =
  'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  export const getdata = async () => {
      try {
          const {data} = await axios.get(baseUrl)
      } catch (error) {
          
      }
  }
