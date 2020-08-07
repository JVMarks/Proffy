import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.4:8020'
})

//endereco de Ip:192.168.0.4

export default api;