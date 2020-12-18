import React from 'react';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';


const List = ({ listArray, order, orderBy, stableSort, getComparator }) => {

  return (
    <TableBody>
      {listArray.length ? (
        stableSort(listArray, getComparator(order, orderBy))
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
  );
}

export default List;