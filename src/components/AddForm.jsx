import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';


const AddForm = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableCell onClick={handleClickOpen}><AddIcon color="primary" /></TableCell>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="xs">
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
          <Button onClick=''>
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

export default AddForm;
