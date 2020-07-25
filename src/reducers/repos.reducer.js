import { searchConstants, apiConstants } from '../constants';

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
        count: 0,
        currentPage: 1,
        totalPages: 1,
        searchValue: ''
      };
    case searchConstants.REPOS_SUCCESS:
      let countForPages = action.repos.count > 1000 ? 1000 : action.repos.count;
      return {
        loading: false,
        items: action.repos.items,
        count: action.repos.count,
        currentPage: action.repos.page,
        totalPages:
          countForPages < apiConstants.PER_PAGE ?
            0 :
            Math.ceil(countForPages / apiConstants.PER_PAGE),
        searchValue: action.repos.searchValue
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