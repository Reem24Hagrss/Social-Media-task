import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, IconButton, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

// import styles
import {useStyles} from './style'
import { blue , green} from '@material-ui/core/colors';
import ReactPlayer from 'react-player';

function Posts(props) {
  const classes = useStyles();
  const posts = props.data;
  const renderPosts = posts.map( post =>{
    return(
      <Card className={classes.post} key={post.id}>
          <CardHeader
            avatar={
              <Avatar aria-label={post.user_name} className={classes.avatar} src={post.user_image}></Avatar>
            }
            title={post.user_name}
            subheader={post.date}
          />
          {
            post.content.image !== "" ? 
                <CardMedia
                className={classes.media}
                image={post.content.image}
                title="Paella dish"
              />
            : null
          }
          {
            post.content.video !== "" ? 
                <ReactPlayer
                width
                url={post.content.video}
              />
            : null
          }
          <CardContent>
            {
              post.content.text !== "" ? 
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.content.text}
                </Typography>
              : null
            }
            <Typography>
              category : <Chip size="small" label={post.category} style={{backgroundColor: green[400]}} />
            </Typography>
            <Typography>
              tags : {
                post.tags.map( tag =>{
                  return (
                    <Chip size="small" label={tag} color="secondary" />
                  )
                })
              }
            </Typography>
          </CardContent>
          
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
    )
  })
  return (
    <React.Fragment>
        <CssBaseline />
        <Container fixed className={classes.root}>
            {renderPosts}
        </Container>
    </React.Fragment>
  );
}

export default Posts;
