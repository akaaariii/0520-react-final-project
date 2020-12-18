const initialState = {
  issuesList: [
    {
      id:771598342,
      title: 'update homepage headline',
      state: 'open',
      url: 'https://api.github.com/repos/angular/angular/issues/40029',
      createdAt: '2020-12-08T20:40:37Z',
      updatedAt: '2020-12-11T19:23:06Z'
    },
    {
      id: 773984644,
      title: 'fix(router): ensure named outlets with empty path parents are matched',
      state: 'open',
      url: 'https://api.github.com/repos/angular/angular/issues/40056',
      createdAt: '2020-12-09T21:50:59Z',
      updatedAt: '2020-12-10T21:51:54Z'
    },
    {
      id: 777693345,
      title: 'docs: add Aristeidis Bampakos to contributor list',
      state: 'open',
      url: 'https://api.github.com/repos/angular/angular/issues/40165',
      createdAt: '2020-12-16T23:14:32Z',
      updatedAt: '2020-12-16T23:14:46Z'
    },
    {
      id: 772049835,
      title: 'Angular animations leak',
      state: 'open',
      url: 'https://api.github.com/repos/angular/angular/issues/40191',
      createdAt: '2020-12-18T23:14:32Z',
      updatedAt: '2020-12-18T23:14:46Z'
    },
    {
      id: 778972456,
      title: 'Docs: Transfer in-memory-web-api into main repo',
      state: 'open',
      url: 'https://api.github.com/repos/angular/angular/issues/40190',
      createdAt: '2020-12-18T23:14:32Z',
      updatedAt: '2020-12-18T23:14:46Z'
    },
    {
      id: 779834795,
      title: 'ci: add jessicajaniuk to pullapprove groups',
      state: 'open',
      url: 'https://api.github.com/repos/angular/angular/issues/40176',
      createdAt: '2020-12-17T23:14:32Z',
      updatedAt: '2020-12-17T23:14:46Z'
    },
  ]
};


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_ISSUE':
      return {
        ...state,
        issuesList: [...state.issuesList, action.payload]
      };
    case 'EDIT_ISSUE':
      const editList = state.issuesList.map((item) => {
        if(item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      return {
        ...state,
        issuesList: editList
      };
    case 'DELETE_ISSUE':
      const newList = state.issuesList.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        issuesList: newList
      };
    default:
      return state;
  }
}

export default reducer;