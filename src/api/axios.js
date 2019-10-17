import * as axios from 'axios';

import ApiHost from '../config';

const instance = axios.create({
  baseURL: ApiHost,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
