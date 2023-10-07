import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd2382ee010494c51a83f6a9b5b54efa1',
  },
});
