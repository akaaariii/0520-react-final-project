import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';


const FilterList = ({ filterVal, filterFunc }) => {
  return (
    <Form>
      <TextField id="standard-full-width" label="Filter issues" size="small" fullWidth margin="dense" color="secondary" />
    </Form>
  )
}

export default FilterList;


const Form = styled.form`
  padding: 5px 24px;
`;