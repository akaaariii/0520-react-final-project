import { ADD_ISSUE, EDIT_ISSUE, DELETE_ISSUE } from '../actions/actions';

const initialState = {
  issues: [
    {
      id: 1,
      title: 'fix(router): ensure named outlets with empty path parents are matched',
      state: 'open',
      url: 'https://api.github.com/repos/angular/angular/issues/40029',
      createdAt: '2020-12-08T20:40:37Z',
      updatedAt: '2020-12-11T19:23:06Z'
    },
    {
      id: 2,
      title: 'update homepage headline',
      state: 'open',
      url: 'https://api.github.com/repos/angular/angular/issues/40056',
      createdAt: '2020-12-09T21:50:59Z',
      updatedAt: '2020-12-10T21:51:54Z'
    }
  ]
};



const reducer = (state = initialState, action) => {
  switch(action.payload) {
    case ADD_ISSUE:
      openAddIssue();
      {const newIssueObj = {
        id: id,
        content: action.payload,
      }
      return {
        ...state,
        issues: [...state.issues, newIssueObj]
      }};
    case EDIT_ISSUE:
      {const newIssueObj = state.issues.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        issues: newIssueObj
      }};
    case DELETE_ISSUE:
      {const newIssueObj = state.issues.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        issues: newIssueObj
      }};
    default:
      return state;
  }
}

export default reducer;