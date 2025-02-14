import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/tasks',
});



export const getTasks = () => api.get('/');
export const createTask = (task) => api.post('/', task);
export const updateTask = (id, updatedTask) => api.put(`/${id}`, updatedTask);
export const deleteTask = (id) => api.delete(`/${id}`);

