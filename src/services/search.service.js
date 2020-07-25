import { apiConstants } from "../constants";

export const getResult = (searchValue, currentPage) => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  const query = `?q=${searchValue}&page=${currentPage || 1}&per_page=${apiConstants.PER_PAGE}`;

  return fetch(apiConstants.API_SEARCH_URL + query, requestOptions).then(handleResponse);
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