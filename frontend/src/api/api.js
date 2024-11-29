import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/tickets', // Replace with your backend URL
});

export const createTicket = (data) => API.post('/', data);
export const getTickets = () => API.get('/');

export default API;
