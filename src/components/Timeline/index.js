import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// imports components
import LeftSide from './LeftSide';
import Post from './Post';
import RecentPosts from './RecentPosts';
import Advertisment from './Advertisment';
// import style
import {useStyles} from './style'

function Timeline(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
        <CssBaseline />
            <Container fixed className={classes.root}>
                <Grid container>
                    <Grid container item xs={12} spacing={3} className={classes.sectionDesktop} style={{margin:0, padding:0}}>
                        <Grid item xs={3} >
                            <Paper className={classes.paper} style={{ borderRadius: '10px' }} >
                                <LeftSide data={props.data} />
                            </Paper>
                        </Grid>
                        <Grid container item xs={6} spacing={3}>
                            <Grid  item xs={12}>
                                <Paper className={classes.post} style={{ borderRadius: '10px' }}>
                                    <Post />
                                </Paper>
                            </Grid>
                            <Grid  item xs={12}>
                                <Paper className={classes.recent} style={{ borderRadius: '10px' }}>
                                    <RecentPosts data={props.data} />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper} style={{ borderRadius: '10px' }}>
                                <Advertisment />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={2} className={classes.sectionMobile}>
                        <Grid container item xs={12} spacing={1} >
                            <Grid  item xs={12} spacing={2}>
                                <Paper className={classes.post} style={{ borderRadius: '10px' }}>
                                    <Post />
                                </Paper>
                            </Grid>
                            <Grid  item xs={12} spacing={2}>
                                <Paper className={classes.recent} style={{ borderRadius: '10px' }}>
                                    <RecentPosts data={props.data} />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default Timeline;
