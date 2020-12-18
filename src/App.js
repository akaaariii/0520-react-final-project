import React from 'react';
import { Paper } from '@material-ui/core';
import { connect } from 'react-redux';

import Header from './components/Header';
import IssuesList from './components/IssuesList';

const App = () => {
  return (
    <>
      <Header />
      <Paper elevation={3}>
        <IssuesList />
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
