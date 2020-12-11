import { Button, Grid, MenuItem, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function Filter(props) {
  const category = props.data.category
  const [state, setState] = useState({ category: "" , tag: "" })

  const handleCategory = (e) => {
    setState({
      category : e.target.value
    })
  }
  const handleTag = (e) => {
    setState({
      tag : e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.data.useFilter(state);
    setState({
      category: "" ,
      tag: ""
    })
  }
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs>
          <TextField
            id="standard-select-currency"
            select
            label="Category"
            value={state.category}
            onChange={handleCategory}
            helperText="Please select Category"
          >
            {category.map((option) => (
              <MenuItem key={category.id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs>
          <TextField id="outlined-search" 
            value={state.tag}
            label="Enter Tag" 
            type="search" 
            variant="outlined" 
            onChange={handleTag}
          />
        </Grid>   
        <Grid item xs>
          <Button variant="outlined" color="primary" onClick={handleSubmit}>
              Apply Filter
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Filter;
