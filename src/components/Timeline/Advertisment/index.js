import React from 'react';
import {CssBaseline, Container, Grid, Paper} from '@material-ui/core'
import {Carousel} from 'react-responsive-carousel';

// import style
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {useStyles} from './style'
function Advertisment() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <CssBaseline />
        <Container fixed className={classes.root}>
            <Grid container spacing={1}>
                <Grid xs={12} item>
                  <Carousel autoPlay showArrows={false} infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} >
                      <div className={classes.advCar}>
                          <img src='https://via.placeholder.com/150x200/0000FF/808080' />
                      </div>
                      <div className={classes.advCar}>
                          <img src='https://via.placeholder.com/150x200/00FF00/808080' />
                      </div>
                      <div className={classes.advCar}>
                          <img src='https://via.placeholder.com/150x200/FF0000/808080' />
                      </div>
                  </Carousel>
                </Grid>
                <Grid item xs={6}> 
                  <Paper className={classes.advHor} style={{backgroundImage:"url('https://via.placeholder.com/150x200/0000FF/808080')"}}></Paper>
                </Grid>
                <Grid item xs={6} className={classes.addSnd}> 
                  <Paper className={classes.advVer} style={{backgroundImage:"url('https://via.placeholder.com/150x200/0000FF/808080')"}}></Paper>
                  <Paper className={classes.advVer} style={{backgroundImage:"url('https://via.placeholder.com/150x200/0000FF/808080')"}}></Paper>
                </Grid>
                {/* <Grid item xs={6}> 
                  <Paper className={classes.advVer} style={{backgroundImage:"url('https://via.placeholder.com/150x200/0000FF/808080')"}}></Paper>
                </Grid> */}
                <Grid item xs={12}> 
                  <Paper className={classes.advBot} style={{backgroundImage:"url('https://via.placeholder.com/150x200/0000FF/808080')"}}></Paper>
                </Grid>
                <Grid item xs={12}> 
                  <Paper className={classes.advBot} style={{backgroundImage:"url('https://via.placeholder.com/150x200/0000FF/808080')"}}></Paper>
                </Grid>
            </Grid>
        </Container>
    </React.Fragment>
  );
}

export default Advertisment;
