import axios from 'axios';

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTliOGI0OTI3MzZhMDQyNGM3NDYxYyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjMzMjg0NDg4LCJleHAiOjE2MzM0NTcyODh9.NRr8zFGMBVk3dVn2lanSsuEcc4ORxoxFHmAU12PJXD8";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});
