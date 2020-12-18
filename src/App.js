import React from 'react';
import { Paper } from '@material-ui/core';
import { connect } from 'react-redux';

import Header from './components/Header';
import IssueList from './components/IssueList';

const App = () => {
  return (
    <>
      <Header />
      <Paper elevation={3}>
        <IssueList />
      </Paper>
    </>
  );
}

const mapStateToProps = state => {
  return {
    issuesList: state.issuesList
  };
};

export default connect(mapStateToProps)(App);
