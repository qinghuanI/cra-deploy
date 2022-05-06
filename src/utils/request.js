import axios from 'axios';

const { REACT_APP_MOCK } = process.env;

const generateBaseUrl = () => {
  if (REACT_APP_MOCK === 'local') {
    return 'http://localhost:3000';
  }

  return '';
};

const instance = axios.create({
  baseURL: generateBaseUrl(),
  timeout: 5 * 1000,
});

instance.interceptors.response.use((res) => {
  if (res?.status === 200 || res?.status === 304) {
    return res.data;
  }
});

export const request = ({ channel, method = 'GET', ...args }) => {
  return instance.request({
    url: channel,
    method,
    ...args,
  });
};
