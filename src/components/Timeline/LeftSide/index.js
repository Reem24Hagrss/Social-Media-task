import React from 'react';
import {CssBaseline, Container, Avatar, Grid, Typography, Divider, Link} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
// import style
import {useStyles, StyledBadge} from './style'

function LeftSide(props) {
  const data = props.data
  const classes = useStyles();
  const renderFriends = data.friends.map( friend =>{
    return(
      <Avatar alt={friend.name} src={friend.image} key={friend.id} />
    )
  })
  const renderGroups = data.groups.map( group =>{
    return(
      <Avatar alt={group.name} src={group.image} key={group.id} />
    )
  })
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
                  <Avatar alt={data.user.name} src={data.user.image}className={classes.large} />
                </StyledBadge>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h5'> {data.user.name} </Typography>
              </Grid>
              <Divider variant="middle" className={classes.divide}/>
              <Grid item xs={12}>
                <Typography className={classes.title} > Friends </Typography>
                <AvatarGroup max={4} className={classes.details} >
                  {renderFriends}
                </AvatarGroup>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.title} > Groups </Typography>
                <AvatarGroup max={4} className={classes.details} >
                  {renderGroups}
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
