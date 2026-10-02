import axios from 'axios';
const baseUrl = 'http://localhost:3001/notes';

async function getAll() {
  const response = await axios.get(baseUrl);
  return response.data;
}

async function create(newObject) {
  const response = await axios.post(baseUrl, newObject);
  return response;
}

async function update(id, newObject) {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response;
}

const deleteData = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response;
};

export default {
  getAll,
  create,
  update,
  deleteData,
};
