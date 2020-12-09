import {Badge} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 20,
        paddingTop: 40,
        height: 'inherit',
        position: 'relative'
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    divide:{
        width: '90%',
    },
    title:{
        textAlign: 'left',
    },
    details:{
        justifyContent: 'center',
    },
    footer:{
        position:'absolute',
        bottom:0,
        justifyContent: 'center',
        width:'90%',
        '& > * + *': {
            marginLeft: theme.spacing(1),
        },
    }
}))

export const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);