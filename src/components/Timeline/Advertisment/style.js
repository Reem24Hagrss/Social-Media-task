import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 20,
        paddingTop: 40,
        height: 'inherit',
        position: 'relative',
        '& > * + *': {
            margin: theme.spacing(3),
        },
    },
    advCar:{
        height: '30vh',
    },
    advHor:{
        height: '21vh',
    },
    advVer:{
        height: '10vh',
    },
    advBot:{
        height: '8vh',
    },
    addSnd:{
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    }
}))