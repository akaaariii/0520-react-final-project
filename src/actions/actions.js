export const newIssueAction = content => {
  return {
    type: 'ADD_ISSUE',
    payload: content
  }
};
export const editIssueAction = content => {
  return {
    type: 'EDIT_ISSUE',
    payload: content
  }
};
export const deleteIssueAction = id => {
  return {
    type: 'DELETE_ISSUE',
    payload: id
  }
};