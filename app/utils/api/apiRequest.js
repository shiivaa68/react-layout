import Axios from 'axios';
import { axiosConfig } from 'constants/axiosConfig';

const axiosInstance = Axios.create({ timeout: axiosConfig.timeout });

function apiRequest({ url, method, data, headers = {} }) {
  return axiosInstance
    .request({
      url,
      method,
      data,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })
    .then(res => {
      const {
        status,
        data: { success, message, data },
      } = res;

      if (status != 200) {
        return Promise.reject({ status, success, message });
      }

      return data;
    })
    .catch(error => {
      console.log('ERROR FROM API CALL FAILURE', { error });
      const { message } = error;
      return Promise.reject({ message });
    });
}

export default apiRequest;
