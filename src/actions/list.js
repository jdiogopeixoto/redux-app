export const LIST_EMPLOYEES = 'LIST_EMPLOYEES';
export const SET_EMPLOYEES = 'SET_EMPLOYEES';

export const fetchList = () => ({
    type: LIST_EMPLOYEES,
});

export const setEmployees = (data) => ({
    type: SET_EMPLOYEES,
    payload: data
})