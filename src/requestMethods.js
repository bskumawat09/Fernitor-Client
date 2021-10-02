import axios from 'axios';

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWI2MzE0YjMxNjA4MTBhYzI3NzBjNSIsImlhdCI6MTYyOTE4NDc4OCwiZXhwIjoxNjI5MjcxMTg4fQ.3xjFXKUbcgk1lTxK0Wscl4-3gAfzRMNGg0ZXhGj2kKM";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});
