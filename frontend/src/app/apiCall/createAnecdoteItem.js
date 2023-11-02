import axios from 'axios';
import URL from '../../../config.js';
const createAnecdoteItem = async (config) => {
  axios
    .post(`${URL}/api/AnectdoteTable`, config)
    .then((response) => {
      setAnecdoteTaskData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export { createAnecdoteItem };
