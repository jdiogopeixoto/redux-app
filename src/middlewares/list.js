import {
    LIST_EMPLOYEES, setEmployees
  } from '../actions/list';
  import { API_ERROR, API_SUCCESS, apiRequest } from '../actions/api';
  import { URL } from '../utils/defaults';
  
  export const listMiddleware = () => next => action => {
    next(action);
  
    switch (action.type) {
      case LIST_EMPLOYEES:
        next(
          apiRequest({
            body: null,
            method: 'GET',
            url: URL,
            feature: LIST_EMPLOYEES,
          })
        );
        break;

        case `${LIST_EMPLOYEES} ${API_SUCCESS}`:
          next(setEmployees(action.payload));
          break;

        default:
        break;
      }
  };
  