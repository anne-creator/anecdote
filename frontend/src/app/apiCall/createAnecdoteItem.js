import axios from 'axios';
const createAnecdoteItem = async (config) => {
  axios
    .post(`${process.env.NEXT_PUBLIC_URL}/api/AnectdoteTable`, config)
    .then((response) => {
      setAnecdoteTaskData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export { createAnecdoteItem };
