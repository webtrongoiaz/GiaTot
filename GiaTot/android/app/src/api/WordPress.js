import axios from 'axios';

const WordPress = axios.create({
  baseURL: 'https://giatot.info/wp-json/wp/v2/',
});

export default WordPress;
