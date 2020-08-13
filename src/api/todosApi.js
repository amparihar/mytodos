import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'https://g0cc3hsjb7.execute-api.ap-south-1.amazonaws.com/dev/todos/v1';

export const getGroups = (token) => {
  return fetch(`${baseUrl}/group/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(handleResponse)
    .catch(handleError);
};

export const saveGroup = (group, token) => {
  return fetch(`${baseUrl}/group`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(group),
  })
    .then(handleResponse)
    .catch(handleError);
};

export const getTasks = () => {
  return fetch(`${baseUrl}/tasks`).then(handleResponse).catch(handleError);
};

export const getTask = (id) => {
  return fetch(`${baseUrl}/tasks/${id}`)
    .then(handleResponse)
    .catch(handleError);
};
