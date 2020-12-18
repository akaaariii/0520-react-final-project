import React, { useState } from 'react';
import { Table, TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core';

import AddForm from './AddForm';
import List from './List';


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


const IssueListHeader = ({ listArray }) => {

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
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
          <AddForm />
        </TableRow>
      </TableHead>
      <List listArray={listArray} order={order} orderBy={orderBy} stableSort={stableSort} getComparator={getComparator} />
    </Table>
  )
}

export default IssueListHeader;
