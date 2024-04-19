import axios from 'axios';

const conf = {
    baseURL: import.meta.env.VITE_APP_BASEURL,
};
const instance = axios.create(conf);
const authInterceptor = (conf) => {
    conf.headers.Authorization = `Bearer ${import.meta.env.VITE_APP_TOKEN}`;
    return conf;
};

instance.interceptors.request.use(authInterceptor);

class Http {
    static async get(url) {
      try {
        const response = await instance.get(url);
        return response.data;
      } catch (e) {
        console.log(e)
        return e.response.data;
      }
    }
    static async post(url, body) {
      try {
        const response = await instance.post(url, body);
        return response.data;
      } catch (e) {
        console.log(e)
        return e.response.data;
      }
    }
  }
  
  export default Http;