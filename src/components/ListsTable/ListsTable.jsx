import React, { useState } from 'react';
// import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import List from '../List/List';

const ListTable = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <List />
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new Issue</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            color="secondary"
            margin="normal"
            id="id"
            label="Id"
            type="number"
            // helperText="Required field"
            fullWidth
          />
          <TextField
            required
            color="secondary"
            margin="normal"
            id="title"
            label="Title"
            type="text"
            // helperText="Required field"
            fullWidth
          />
          <TextField
            required
            color="secondary"
            margin="normal"
            id="state"
            label="State"
            type="text"
            // helperText="Required field"
            fullWidth
          />
          <TextField
            color="secondary"
            margin="normal"
            id="url"
            label="Url"
            type="text"
            fullWidth
          />
          <TextField
            color="secondary"
            margin="normal"
            id="createdAt"
            label="Created at"
            type="text"
            fullWidth
          />
          <TextField
            color="secondary"
            margin="normal"
            id="updatedAt"
            label="Updated at"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Save
          </Button>
          <Button onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ListTable;