import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import IssueList from './components/IssueList';

const App = () => {
  return (
    <>
      <Header />
      <IssueList />
    </>
  );
}

const mapStateToProps = state => {
  return {
    issuesList: state.issuesList
  };
};

export default connect(mapStateToProps)(App);
