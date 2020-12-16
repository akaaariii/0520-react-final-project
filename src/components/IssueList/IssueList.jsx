import React from 'react';
import { connect } from 'react-redux';

import List from '../List/List';
import { newIssueAction, editIssueAction, deleteIssueAction } from '../../actions/actions';

const IssueList = ({ listArray, newIssue, editIssue, deleteIssue }) => {
  
  const addIssue = (content) => {
    newIssue(content);
  };
  const changeIssue = (id) => {
    editIssue(id);
  };
  const removeIssue = (id) => {
    deleteIssue(id);
  }
  

  return (
    <>
      <List addIssue={addIssue} changeIssue={changeIssue} removeIssue={removeIssue} />
    </>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    newIssue: (content) => {
      dispatch(newIssueAction(content));
    },
    editIssue: (id) => {
      dispatch(editIssueAction(id));
    },
    deleteIssue: (id) => {
      dispatch(deleteIssueAction(id));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    listArray: state.issuesList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);