import axios from 'axios';

const createAnecdoteItem = async (config) => {
  axios
    .get('http://localhost:3000/api/listAnecdote', config)
    .then((response) => {
      setAnecdoteTaskData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export { createAnecdoteItem };
