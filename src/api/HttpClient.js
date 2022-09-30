import axios from 'axios';
//Local

const productsAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
  });
 
const requestGenerico = {
    get: (url) => productsAxios.get(url),
    post: (url, body) => productsAxios.post(url, body),
    postFile: (url, body,type) => productsAxios.post(url, body,type),
    put: (url, body) => productsAxios.put(url, body),
    delete: (url,body) => productsAxios.delete(url, body)
};

export default requestGenerico;