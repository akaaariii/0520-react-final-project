import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import AddForm from './AddForm';
import List from './List';
import { newIssueAction, editIssueAction, deleteIssueAction } from '../actions/actions';


const headCells = [
  {id: 'id', label: 'Id'},
  {id: 'title', label: 'Title'},
  {id: 'state', label: 'State'},
  {id: 'url', label: 'Url'},
  {id: 'createdAt', label: 'Created at'},
  {id: 'updatedAt', label: 'Updated at'}
]

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


const IssuesList = ({ listArray, newIssue, editIssue, deleteIssue }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');
  const [filterValue, setFilterValue] = useState(listArray);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [addAndEditIssue, setAddAndEditIssue] = useState('');

  const handleSearch = e => {
    if(e.target.value === ''){
      return listArray;
    } else {
      let filteredArray = listArray.filter(item => item.title.toLowerCase().includes(e.target.value));
      return setFilterValue(filteredArray);
    }
  }

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setAddAndEditIssue({
      id: '',
      title: '',
      state: '',
      url: '',
      createdAt: '',
      updatedAt: ''
    });
  };
  const saveNewIssue = () => {
    newIssue(addAndEditIssue);
    setOpen(false);
  }
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (editedIssue) => {
    setAddAndEditIssue(editedIssue);
  };
  
  const onEditClick = ({ issue }) => {
    setOpenEdit(true);
    setAddAndEditIssue({
      id: issue.id,
      title: issue.title,
      state: issue.state,
      url: issue.url,
      createdAt: issue.createdAt,
      updatedAt: issue.updatedAt
    });
  };
  const saveChangeIssue = () => {
    editIssue(addAndEditIssue);
    setOpenEdit(false);
  };
  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const onDeleteClick = ({ issue }) => {
    setOpenDelete(true);
    setAddAndEditIssue({
      id: issue.id,
      title: issue.title,
      state: issue.state,
      url: issue.url
    })
  };
  const handleDeleteClose = () => {
    setOpenDelete(false);
  }
  const saveRemoveIssue = () => {
    deleteIssue(addAndEditIssue.id);
    setOpenDelete(false);
  };

  return (
    <>
      <Form autoComplete="off">
          <TextField id="standard-full-width" label="Filter issues" size="small" fullWidth margin="dense" color="secondary"
                     onChange={handleSearch} />
      </Form>
      <Table  size="small">
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                </TableSortLabel>
              </TableCell>
            ))}
            <TableCell onClick={handleClickOpen}>
              <IconButton color="primary">
                <AddIcon color="primary" />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
          {filterValue.length ? (
            stableSort(filterValue, getComparator(order, orderBy))
              .map((issue) => (
                <List key={issue.id} issue={issue} onEditClick={onEditClick} onDeleteClick={onDeleteClick} />
              ))
          ) : (
            <p>Your Issue List is Empty</p>
          )}
        </TableBody>
      </Table>
  
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="xs">
        <DialogTitle id="form-dialog-title">Add new Issue</DialogTitle>
        <DialogContent>
          <AddForm issue={addAndEditIssue} handleChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={saveNewIssue}
            >
            Save
          </Button>
          <Button onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openEdit} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="xs">
        <DialogTitle id="form-dialog-title">Issue id: {addAndEditIssue.id}</DialogTitle>
        <DialogContent>
          <AddForm issue={addAndEditIssue} handleChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={saveChangeIssue}
            >
            Save
          </Button>
          <Button onClick={handleEditClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDelete} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm">
        <DialogTitle id="form-dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <p>Id: {addAndEditIssue.id}</p>
          <p>Title: {addAndEditIssue.title}</p>
          <p>State: {addAndEditIssue.state}</p>
          <p>Url: {addAndEditIssue.url}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={saveRemoveIssue}>
            Delete
          </Button>
          <Button onClick={handleDeleteClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    newIssue: (content) => {
      dispatch(newIssueAction(content));
    },
    editIssue: (content) => {
      dispatch(editIssueAction(content));
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

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);


const Form = styled.form`
  padding: 5px 24px;
`;