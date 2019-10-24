import {  } from '../actions/list';

const initState = [];

export const testReducer = (test = initState, action) => {
  switch (action.type) {
    default:
      return { ...test };
  }
};
