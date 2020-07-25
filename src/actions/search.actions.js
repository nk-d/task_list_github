import { searchConstants } from '../constants';
import { getResult, getMyProjects } from '../services';

export const searchActions = {
  getSearchResult,
  getAll
};

function getSearchResult (searchValue) {
  return dispatch => {
    dispatch(request(searchValue));

    getResult(searchValue)
      .then(
        repos => {
          dispatch(success({
            items: repos.items,
            count: repos.total_count
          }));
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request(search) { return { type: searchConstants.REPOS_REQUEST, search } }
  function success(repos) { return { type: searchConstants.REPOS_SUCCESS, repos } }
  function failure(error) { return { type: searchConstants.REPOS_FAILURE, error } }
}

function getAll () {
  return dispatch => {
    dispatch(request());

    getMyProjects()
      .then(
        repos => dispatch(success({
          items: repos,
          count: repos.length
        })),
        error => dispatch(failure(error))
      );
  };

  function request() { return { type: searchConstants.GETALL_REQUEST } }
  function success(repos) { return { type: searchConstants.GETALL_SUCCESS, repos } }
  function failure(error) { return { type: searchConstants.GETALL_FAILURE, error } }
}