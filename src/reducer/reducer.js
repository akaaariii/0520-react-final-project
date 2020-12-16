const initialState = {
  issuesList: [
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
  console.log('action: ', action.type)
  switch(action.type) {
    case 'ADD_ISSUE':
      {const newList = {
        content: action.payload,
      }
      return {
        ...state,
        issuesList: [...state.issuesList, newList]
      }};
    case 'EDIT_ISSUE':
      {const newList = state.issuesList.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        issuesList: newList
      }};
    case 'DELETE_ISSUE':
      {const newList = state.issuesList.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        issuesList: newList
      }};
    default:
      return state;
  }
}

export default reducer;