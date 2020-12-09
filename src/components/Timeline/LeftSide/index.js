import React from 'react';
import {CssBaseline, Container, Avatar, Grid, Typography, Divider, Link} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {getData} from '../../../actions/getData'
// import style
import {useStyles, StyledBadge} from './style'

function LeftSide(props) {
  console.log( props.getData() );
  const classes = useStyles();
  return (
    <React.Fragment>
        <CssBaseline />
        <Container fixed className={classes.root}>
          <Grid container spacing={2}>
              <Grid item xs={12}>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    variant="dot"
                  >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                </StyledBadge>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h5'> Remy Sharp </Typography>
              </Grid>
              <Divider variant="middle" className={classes.divide}/>
              <Grid item xs={12}>
                <Typography className={classes.title} > Friends </Typography>
                <AvatarGroup max={4} className={classes.details} >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.title} > Groups </Typography>
                <AvatarGroup max={4} className={classes.details} >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
              </Grid>
              <Divider variant="middle" className={classes.divide}/>
              <Grid item xs={12} spacing='1' edge="end" className={classes.footer}>
                <Link component="button" variant="body2" onClick={()=>{console.log("");}} >
                  Settings
                </Link> 
                <Link component="button" variant="body2" onClick={()=>{console.log("");}} >
                  Privacy
                </Link> 
                <Link component="button" variant="body2" onClick={()=>{console.log("");}} >
                  Terms
                </Link> 
                <Link component="button" variant="body2" onClick={()=>{console.log("");}} >
                  Advertising
                </Link> 
                <Typography variant='caption' display="block">  Reem &#169; 2020 </Typography>
              </Grid>
          </Grid>
        </Container>
    </React.Fragment>
  );
}

export default LeftSide;
