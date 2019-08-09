const TOKEN = 'DKghPjvqPi5PznOFXUgBKBoOyEA3yuY';
const BASE_URL = 'https://api.vime.world';

const api = {
  getUserStats: id =>
    new Promise((resolve, reject) => {
      fetch(`${BASE_URL}/user/${id}/stats`, {
        mode: 'no-cors',
        headers: { 'Access-Token': TOKEN },
      })
        .then(response => response.json())
        .then(data => resolve(data));
    }),
  findUser: name =>
    new Promise((resolve, reject) => {
      fetch(`${BASE_URL}/user/name/${name}`, {
        mode: 'no-cors',
        headers: { 'Access-Token': TOKEN },
      })
        .then(response => response.json())
        .then(data => resolve(data));
    }),
};

export default api;
