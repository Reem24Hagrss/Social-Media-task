import React from 'react';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Button, Grid } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { orange , blue} from '@material-ui/core/colors';

import {useStyles} from './style'

function Post() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <CssBaseline />
        <Container className={classes.root}>
          <Grid container item spacing={1} >
              <Grid  item xs={12}>
              <TextField
                  id="outlined-helperText"
                  label="Create a post"
                  variant="outlined"
                  multiline
                  rows={3}
                  className={classes.input}
                />
              </Grid>
              <Grid container item xs={12} spacing={1} >
                <Grid  item>
                    <Button size="small" color="default">
                      <CreateIcon fontSize="small" color='primary'/>
                      POST 
                    </Button>
                </Grid>
                <Grid item>
                  <input accept="image/*" className={classes.select} id="select-image" type="file" multiple />
                  <label htmlFor="select-image">
                    <Button size="small" color="default" component="span">
                        <PhotoIcon fontSize="small" style={{ color: blue[500] }}/>
                        PHOTOS 
                    </Button>
                  </label>
                </Grid>
                <Grid  item>
                  <input accept="video/*" className={classes.select} id="select-video" type="file" />
                  <label htmlFor="select-video">
                    <Button size="small" color="default" component="span">
                      <YouTubeIcon fontSize="small" style={{ color: orange[500] }} />
                      VIDEOS 
                    </Button>
                  </label>
                </Grid>
              </Grid>
          </Grid>
        </Container>
    </React.Fragment>
  );
}

export default Post;
