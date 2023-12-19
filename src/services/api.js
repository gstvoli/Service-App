import axios from 'axios';

const api = axios.create({
  baseURL: 'http:/10.0.2.2:3000/api',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
});

const dateFields = ['aniversario', 'data_abertura', 'data_encerramento'];

const parseDates = (data) => {
  if (Array.isArray(data)) {
    return data.map(parseDates);
  } else if (data != null && typeof data === 'object') {
    for (const key in data) {
      if (dateFields.includes(key) && typeof data[key] === 'string') {
        data[key] = new Date(data[key]);
      }
      if (typeof data[key] === 'object') {
        data[key] = parseDates(data[key]);
      }
    }
  }
  return data;
};

api.interceptors.response.use(
  (response) => {
    response.data = parseDates(response.data);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
