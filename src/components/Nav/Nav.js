import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, Divider, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import GroupIcon from '@material-ui/icons/Group';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';


import {useStyles} from './style';

function Nav(props) {
  const user = props.data.user
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className={classes.menuItem}>
        <Avatar src={user.image} fontSize='small'></Avatar> 
        <p>{user.name}</p>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <IconButton
          aria-label="account of current user"
          color="inherit"
        >
          <AccountCircle fontSize="small" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon fontSize="small" />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon fontSize="small" />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <Divider />
      <MenuItem className={classes.menuItem}>
        <IconButton
            aria-label="groups"
            color="inherit"
          >
            <GroupIcon fontSize="small" />
        </IconButton>
        <p>Groups</p>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <IconButton
            aria-label="friends"
            color="inherit"
          >
            <PeopleOutlineIcon fontSize="small" />
        </IconButton>
        <p>Friends</p>
      </MenuItem>
      <Divider />
      <MenuItem className={classes.menuItem}>
        <IconButton
            aria-label="settings"
            color="inherit"
          >
            <SettingsOutlinedIcon fontSize="small" />
        </IconButton>
        <p>Settings</p>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <IconButton
            aria-label="log out"
            color="inherit"
          >
            <ExitToAppIcon fontSize="small" />
        </IconButton>
        <p>Log out</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Social-Media
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
                aria-label="account of current user"
                color="inherit"
              >
                <Avatar src={user.image} fontSize='small'></Avatar> 
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="log out"
              color="inherit"
            >
               <ExitToAppIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

export default Nav;
