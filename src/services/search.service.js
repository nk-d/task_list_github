import { apiConstants } from "../constants";

export const getResult = searchValue => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  return fetch(apiConstants.API_SEARCH_URL + '?q=' + searchValue, requestOptions).then(handleResponse);
}

export const getMyProjects = () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  return fetch(apiConstants.API_MY_PROJECTS, requestOptions).then(handleResponse);
}

const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // Handle 401 status, mb Alert
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}