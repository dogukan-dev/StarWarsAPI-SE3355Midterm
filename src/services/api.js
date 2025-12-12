// API Service
const API_BASE = 'https://swapi.dev/api';

const fetchData = async (endpoint) => {
  const response = await fetch(`${API_BASE}${endpoint}`);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
};

export { fetchData };