import React, { useState } from 'react';
import { connect } from 'react-redux';

import FilterList from './FilterList';
import List from './List';
import { newIssueAction, editIssueAction, deleteIssueAction } from '../actions/actions';

const IssueList = ({ listArray, newIssue, editIssue, deleteIssue }) => {

  // const [filterVal, setFilterVal] = useState({ fn: items => { return items; }});
  
  const addIssue = (content) => {
    newIssue(content);
  };
  const changeIssue = (id) => {
    editIssue(id);
  };
  const removeIssue = (id) => {
    deleteIssue(id);
  }

  // const handleSearch = e => {
  //   console.log(e)
  //   setFilterVal({
  //     fn: items => {
  //       if(e.target.value === ''){
  //         return items;
  //       } else {
  //         return items.filter(item => item.title.toLowerCase().includes(e.target.value))
  //       }
  //     }
  //   })
  // }
  
  const handleSearch = e => {
    console.log(e.target.value)
    if(e.target.value === ''){
      return listArray;
    } else {
      return listArray.filter(list => list.title.toLowerCase().includes(e.target.value))
    }
  }

  return (
    <>
      <FilterList filterFunc={handleSearch} />
      <List listArray={listArray} addIssue={addIssue} changeIssue={changeIssue} removeIssue={removeIssue} />
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