import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
 


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const Progress = ({ percentage }) => {
  const classes = useStyles();  
    return (
        <div className={classes.root}>
           <LinearProgress variant="determinate" value={percentage} color="secondary" />
        </div>
    );

}

export default Progress;