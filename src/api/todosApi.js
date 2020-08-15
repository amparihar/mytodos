import { handleResponse, handleError, baseUrl } from './apiUtils';

export const getGroups = (token) => {
  return fetch(`${baseUrl}/group/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
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

export const getTasks = (token) => {
  return fetch(`${baseUrl}/task/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(handleResponse)
    .catch(handleError);
};

export const saveTask = (task, token) => {
  return fetch(`${baseUrl}/task`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  })
    .then(handleResponse)
    .catch(handleError);
};
