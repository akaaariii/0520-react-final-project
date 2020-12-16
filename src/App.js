import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import FilterList from './components/FilterList/FilterList';
// import ListsTable from './components/ListsTable/ListsTable';
import IssueList from './components/IssueList/IssueList';

function App() {
  return (
    <div className="App">
      <Header />
      <FilterList />
      {/* <ListsTable /> */}
      <IssueList />
    </div>
  );
}

export default App;
