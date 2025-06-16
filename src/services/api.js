// src/services/api.js
import axios from 'axios';

const API_URL = 'https://mockapi.wellics.cloud/api';

export async function fetchUser() {
  const res = await axios.get(`${API_URL}/user`);
  return res.data;
}

export async function fetchMetrics(type, duration) {
  const res = await axios.get(`${API_URL}/metrics`, {
    params: { type, duration },
  });
  return res.data;
}

export async function fetchTip() {
  const res = await axios.get(`${API_URL}/tips`);
  console.log(res.data)
  return res.data;
}