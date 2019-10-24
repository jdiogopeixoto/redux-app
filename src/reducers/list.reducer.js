import { SET_EMPLOYEES } from '../actions/list';

const initState = [];

export const listReducer = (list = initState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
     return { ...list, data: action.payload }
    
    default:
      return { ...list };
  }
};
