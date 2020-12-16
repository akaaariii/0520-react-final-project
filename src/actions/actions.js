export const newIssueAction = content => {
  return {
    type: 'ADD_ISSUE',
    payload: content
  }
};
export const editIssueAction = id => {
  return {
    type: 'EDIT_ISSUE',
    payload: id
  }
};
export const deleteIssueAction = id => {
  return {
    type: 'DELETE_ISSUE',
    payload: id
  }
};