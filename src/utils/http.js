import axios from 'axios';

export const httpGet = (state, url, params = {}, headers = {}) => {
  const newHeaders = headers;

  if (state) {
    newHeaders['X-API-KEY'] = state.apiKey;
  }
  const axiosCreate = axios.create({ headers: newHeaders });

  return axiosCreate.get(url, { params });
};

export const httpPost = (state, url, params = {}, headers = {}) => {
  const newHeaders = headers;

  if (state) {
    newHeaders['X-API-KEY'] = state.apiKey;
  }
  const axiosCreate = axios.create({ headers: newHeaders });

  return axiosCreate.post(url, params);
};
