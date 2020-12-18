import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

import IssueListHeader from './IssueListHeader';
import { newIssueAction, editIssueAction, deleteIssueAction } from '../actions/actions';


const IssueList = ({ listArray, newIssue, editIssue, deleteIssue }) => {
  const [filterValue, setFilterValue] = useState(listArray);
  
  const addIssue = (content) => {
    newIssue(content);
  };
  const changeIssue = (id) => {
    editIssue(id);
  };
  const removeIssue = (id) => {
    deleteIssue(id);
  };

  const handleSearch = e => {
    if(e.target.value === ''){
      return listArray;
    } else {
      let filteredArray = listArray.filter(item => item.title.toLowerCase().includes(e.target.value));
      return setFilterValue(filteredArray);
    }
  }

  

  return (
    <>
      <Form autoComplete="off">
          <TextField id="standard-full-width" label="Filter issues" size="small" fullWidth margin="dense" color="secondary"
                     onChange={handleSearch} />
      </Form>
      <IssueListHeader listArray={filterValue} />
    </>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    // newIssue: (content) => {
    //   dispatch(newIssueAction(content));
    // },
    // editIssue: (id) => {
    //   dispatch(editIssueAction(id));
    // },
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


const Form = styled.form`
  padding: 5px 24px;
`;