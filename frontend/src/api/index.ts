import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || ''
});

instance.interceptors.request.use((request) => {
  request.headers.set('x-access-token', localStorage.getItem('token'))
  return request
})

export default instance;


