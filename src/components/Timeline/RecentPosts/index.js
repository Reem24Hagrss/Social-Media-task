import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton } from '@material-ui/core';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

// import styles
import {useStyles} from './style'
import { blue } from '@material-ui/core/colors';

function RecentPosts() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <CssBaseline />
        <Container fixed className={classes.root}>
            <Card className={classes.post}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      {/* <MoreVertIcon /> */}
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={classes.media}
                  image='https://via.placeholder.com/150x200/0000FF/808080'
                  title="Paella dish"
                />
                {/* <CardContent>

                </CardContent> */}
                <CardActions>
                  <Button aria-label="react" size="small" >
                    <ThumbUpAltOutlinedIcon fontSize="small" style={{color: blue[500], transform: 'rotateY(180deg)'}} /> Like
                  </Button>
                  <Button aria-label="comment" size="small">
                    <ChatBubbleOutlineRoundedIcon fontSize="small"style={{color: blue[500], transform: 'rotateY(180deg)'}} /> Comment
                  </Button>
                  <Button aria-label="share" size="small">
                    <ShareOutlinedIcon fontSize="small" style={{color: blue[500], transform: 'rotateY(180deg)'}} /> Share
                  </Button>
                </CardActions>

            </Card>
        </Container>
    </React.Fragment>
  );
}

export default RecentPosts;
