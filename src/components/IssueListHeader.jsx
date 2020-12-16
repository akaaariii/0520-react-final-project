import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import AddForm from './AddForm';


const IssueListHeader = ({ order, orderBy, onRequestSort }) => {

  const headCells = [
    {id: 'id', label: 'Id'},
    {id: 'title', label: 'Title'},
    {id: 'state', label: 'State'},
    {id: 'url', label: 'Url'},
    {id: 'createdAt', label: 'Created at'},
    {id: 'updatedAt', label: 'Updated at'}
  ];

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
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
        <AddForm />
      </TableRow>
    </TableHead>
  )
}

export default IssueListHeader;
