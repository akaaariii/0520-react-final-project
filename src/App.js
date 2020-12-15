import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import FilterList from './components/FilterList/FilterList';
import ListsTable from './components/ListsTable/ListsTable';

function App() {
  return (
    <div className="App">
      <Header />
      <FilterList />
      <ListsTable />
    </div>
  );
}

export default App;
