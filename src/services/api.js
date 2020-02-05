import axios from 'axios';

const api = axios.create({ baseURL: 'http://172.20.1.190:3000' });

export default api;
