import React from 'react';
import TextField from '@material-ui/core/TextField';

import { Form } from './FilterList.styles'; 

const FilterList = () => {
  return (
    <Form>
      <TextField id="standard-full-width" label="Filter issues" size="small" fullWidth margin="dense" color="secondary" />
    </Form>
  )
}

export default FilterList;
