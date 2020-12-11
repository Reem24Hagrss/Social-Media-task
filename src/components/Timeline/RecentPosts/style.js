import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 0
      },
    post:{
        width: '100%',
        minHeight: 30,
        textAlign: 'left'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
}))