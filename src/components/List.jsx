import React from 'react';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';


const List = ({ issue, onEditClick, onDeleteClick }) => {

  const handleEditOpen = () => {
    onEditClick({ issue })
  }
  const handleDeleteOpen = () => {
    onDeleteClick({ issue })
  }

  return (
    <TableRow key={issue.id}>
      <TableCell>{issue.id}</TableCell>
      <TableCell>{issue.title}</TableCell>
      <TableCell>{issue.state}</TableCell>
      <TableCell>{issue.url}</TableCell>
      <TableCell>{issue.createdAt}</TableCell>
      <TableCell>{issue.updatedAt}</TableCell>
      <TableCell>
        <IconButton color="secondary"><CreateIcon onClick={handleEditOpen} color="secondary" /></IconButton>
      </TableCell>
      <TableCell>
        <IconButton color="secondary"><DeleteIcon onClick={handleDeleteOpen} color="secondary" /></IconButton>
      </TableCell>
    </TableRow>
  );
}

export default List;