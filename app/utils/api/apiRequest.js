import Axios from 'axios';
import axiosConfig from 'constants/axiosConfig';

const axiosInstance = Axios.create({ timeout: axiosConfig.timeout });

function apiRequest({ url, method, data, headers = {} }) {
  return axiosInstance
    .request({
      url,
      method,
      data,
      headers: {
        // 'Content-Type': 'application/json',
        'x-platform': 0,
        ...headers,
      },
    })
    .then(res => {
      // console.log('TOKEN >>>>>', res.headers['x-auth-token']);

      const {
        status,
        message,
        data: { data },
      } = res;

      if (status !== 200) {
        console.log('BEFORE REJECT >>>', { res });
        return Promise.reject({ message });
      }

      return data;
    })
    .catch(error => {
      const { message } = error;
      /** login failed */
      if (error.response && error.response.status >= 400) {
        console.log('BEFORE 409 || 405');
        return Promise.reject({
          status: error.response.status,
          message: error.response.data.message,
        });
      }

      if (message === 'Network Error') {
        return Promise.reject({
          status: 400,
          message: 'اینترنت خود را چک کنید',
        });
      }

      const { message: errMessage } = error;
      return Promise.reject({ message: errMessage });
    });
}

export default apiRequest;
