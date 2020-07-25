import { searchConstants } from '../constants';

export function repos(state = {}, action) {
  switch (action.type) {
    case searchConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case searchConstants.GETALL_SUCCESS:
      return {
        items: action.repos.items,
        count: action.repos.count,
        loading: false
      };
    case searchConstants.GETALL_FAILURE:
      return {
        error: action.error,
        loading: false
      };

    case searchConstants.REPOS_REQUEST:
      return {
        loading: true,
        items: [],
        count: 0
      };
    case searchConstants.REPOS_SUCCESS:
      return {
        items: action.repos.items,
        count: action.repos.count,
        loading: false
      };
    case searchConstants.REPOS_FAILURE:
      return {
        error: action.error,
        loading: false
      };
    default:
      return state
  }
}