import React from 'react';
import TextField from '@material-ui/core/TextField';

const AddForm = ({issue, handleChange}) => {

  const handleInputChange = e => {
    const {name, value} = e.target;
    handleChange({ ...issue, [name]: value })
  }
  
  return (
    <>
      <TextField
        autoFocus
        required
        error={issue.id === ""}
        color="secondary"
        margin="normal"
        name="id"
        id="id"
        label="Id"
        type="number"
        fullWidth
        helperText={issue.id === "" ? "Required field" : ""}
        onChange={handleInputChange}
        value={issue.id}
      />
      <TextField
        required
        error={issue.title === ""}
        color="secondary"
        margin="normal"
        name="title"
        id="title"
        label="Title"
        type="text"
        fullWidth
        helperText={issue.title === "" ? "Required field" : ""}
        onChange={handleInputChange}
        value={issue.title}
      />
      <TextField
        required
        error={issue.state === ""}
        color="secondary"
        margin="normal"
        name="state"
        id="state"
        label="State"
        type="text"
        fullWidth
        helperText={issue.state === "" ? "Required field" : ""}
        onChange={handleInputChange}
        value={issue.state}
      />
      <TextField
        color="secondary"
        margin="normal"
        name="url"
        id="url"
        label="Url"
        type="text"
        fullWidth
        onChange={handleInputChange}
        value={issue.url}
      />
      <TextField
        color="secondary"
        margin="normal"
        name="createdAt"
        id="createdAt"
        label="Created at"
        type="text"
        fullWidth
        onChange={handleInputChange}
        value={issue.createdAt}
      />
      <TextField
        color="secondary"
        margin="normal"
        name="updatedAt"
        id="updatedAt"
        label="Updated at"
        type="text"
        fullWidth
        onChange={handleInputChange}
        value={issue.updatedAt}
      />
    </>
  )
}

export default AddForm;
