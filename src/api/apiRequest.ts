import axios from 'axios';

interface apiRequestProps {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  headers?: any;
  data?: any;
  params?: any;
}

const baseUrl = process.env.REACT_APP_RIOT_API_KEY;

const apiRequest = async <T = any>({
  url,
  method,
  headers,
  data,
  params,
}: apiRequestProps): Promise<T> => {
  return await axios({
    url: baseUrl + url,
    method,
    data,
    params,
    timeout: 5000,
    headers,
  });
};

export default apiRequest;
