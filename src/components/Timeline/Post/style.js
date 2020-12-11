import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: "left",
        paddingTop: '5%',
      },
      input:{
        width: '100%',
      },
      select: {
        display: 'none',
      },
}));