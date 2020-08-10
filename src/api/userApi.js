import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'https://g0cc3hsjb7.execute-api.ap-south-1.amazonaws.com/dev';

export const signUp = (id, username, password) => {
  return fetch(`${baseUrl}/todos/v1/user`, {
    method: "POST", 
    headers: { "content-type": "application/json" },
    body: JSON.stringify({id, username, password})
  })
    .then(handleResponse)
    .catch(handleError);
};


export const signIn = (username, password) => {
  return fetch(`${baseUrl}/todos/v1/user/signin`, {
    method: "POST", 
    headers: { "content-type": "application/json" },
    body: JSON.stringify({username, password})
  })
    .then(handleResponse)
    .catch(handleError);
};


