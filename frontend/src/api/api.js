import axios from 'axios';

const conf = {
    baseURL: `https://api.json-generator.com/templates/`,
};
// //Каталог
// https://api.json-generator.com/templates/-bbkTEl2iULy/data
// //Новинки
// https://api.json-generator.com/templates/u9B6Vjaqtvn7/data
// //post
// https://api.json-generator.com/templates/3TyrL3huibQ_/data
const instance = axios.create(conf);
const authInterceptor = (conf) => {
    conf.headers.Authorization = `Bearer ${import.meta.env.VITE_APP_TOKEN}`;
    return conf;
};

instance.interceptors.request.use(authInterceptor);

class Fetch {
    static async get(url) {
      try {
        const response = await instance.get(url);
        const data = response.data;
        return data;
      } catch (e) {
        console.log(e)
        return e.response.data;
      }
    }
    static async post(url, body) {
      try {
        const response = await instance.post(url, body);
        const data = response.data;
        return data;
      } catch (e) {
        console.log(e)
        return e.response.data;
      }
    }
  }
  
  export default Fetch;