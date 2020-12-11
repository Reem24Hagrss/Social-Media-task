import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
          marginTop: 80,
          height: '80vh',
      },
      post:{
          marginTop: '20%',
          height: '25vh',
          [theme.breakpoints.up('md')]: {
              marginTop: 80,
              height: '18vh',
          },
      },
      recent:{
          backgroundColor:'transparent',
          minHeight: '100vh',
          boxShadow: 'initial'
      },
      sectionDesktop: {
          display: 'none',
          [theme.breakpoints.up('md')]: {
            display: 'flex',
          },
      },
      sectionMobile: {
          display: 'flex',
          [theme.breakpoints.up('md')]: {
              display: 'none',
          },
      },
}))