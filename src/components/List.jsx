import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import IssueListHeader from './IssueListHeader';


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


const List = ({ listArray }) => {
  const [records, setRecords] = useState(listArray);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; }});

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  return (
    <Table  size="small">  
      <IssueListHeader
        order={order}
        orderBy={orderBy}
        onRequestSort={handleRequestSort}
      />
      <TableBody>
        {records.length ? (
          stableSort(records, getComparator(order, orderBy))
            .map((issue) => (
                <TableRow key={issue.id}>
                  <TableCell>{issue.id}</TableCell>
                  <TableCell>{issue.title}</TableCell>
                  <TableCell>{issue.state}</TableCell>
                  <TableCell>{issue.url}</TableCell>
                  <TableCell>{issue.createdAt}</TableCell>
                  <TableCell>{issue.updatedAt}</TableCell>
                  <TableCell><CreateIcon color="secondary" /></TableCell>
                  <TableCell><DeleteIcon color="secondary" /></TableCell>
                </TableRow>
            ))
          ) : (
            <p>Your Issue List is Empty</p>
          )}
      </TableBody>
    </Table>
  );
}

export default List;