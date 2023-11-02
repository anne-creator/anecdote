import axios from 'axios';

const createAnecdoteItem = async (config) => {
  axios
    .post('http://localhost:3002/api/AnectdoteTable', config)
    .then((response) => {
      setAnecdoteTaskData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export { createAnecdoteItem };
