import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

const rows = [
  {
    id: 1,
    title: 'fix(router): ensure named outlets with empty path parents are matched',
    state: 'open',
    url: 'https://api.github.com/repos/angular/angular/issues/40029',
    createdAt: '2020-12-08T20:40:37Z',
    updatedAt: '2020-12-11T19:23:06Z'
  },
  {
    id: 2,
    title: 'update homepage headline',
    state: 'open',
    url: 'https://api.github.com/repos/angular/angular/issues/40056',
    createdAt: '2020-12-09T21:50:59Z',
    updatedAt: '2020-12-10T21:51:54Z'
  }
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {id: 'id', label: 'Id'},
  {id: 'title', label: 'Title'},
  {id: 'state', label: 'State'},
  {id: 'url', label: 'Url'},
  {id: 'createdAt', label: 'Created at'},
  {id: 'updatedAt', label: 'Updated at'}
]

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    console.log(property, event)
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
        <TableCell><AddIcon color="primary" /></TableCell>
      </TableRow>
    </TableHead>
  );
}


export default function List() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Table size="small">  
      <EnhancedTableHead
        order={order}
        orderBy={orderBy}
        onRequestSort={handleRequestSort}
      />
      <TableBody>
        {stableSort(rows, getComparator(order, orderBy))
          .map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.url}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell>{row.updatedAt}</TableCell>
                <TableCell><CreateIcon color="secondary" /></TableCell>
                <TableCell><DeleteIcon color="secondary" /></TableCell>
              </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
