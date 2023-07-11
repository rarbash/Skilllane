import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
});

instance.interceptors.request.use((request) => {
  request.headers.set('x-access-token', localStorage.getItem('token'))
  return request
})

export default instance;


