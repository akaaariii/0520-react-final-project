export const ADD_ISSUE = 'ADD_ISSUE';
export const EDIT_ISSUE = 'EDIT_ISSUE';
export const DELETE_ISSUE = 'DELETE_ISSUE';

export const newIssueAction = content => {
  return {
    type: ADD_ISSUE,
    payload: content
  }
};
export const editIssueAction = id => {
  return {
    type: EDIT_ISSUE,
    payload: id
  }
};
export const deleteIssueAction = id => {
  return {
    type: DELETE_ISSUE,
    payload: id
  }
};