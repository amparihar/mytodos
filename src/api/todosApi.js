import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'https://my-json-server.typicode.com/amparihar/api';

export const getGroups = () => {
  return fetch(`${baseUrl}/groups`)
    .then(handleResponse)
    .catch(handleError);
};

export const getTasks = () => {
  return fetch(`${baseUrl}/tasks`)
    .then(handleResponse)
    .catch(handleError);
};

export const getTask = (id) => {
  return fetch(`${baseUrl}/tasks/${id}`)
    .then(handleResponse)
    .catch(handleError);
};
