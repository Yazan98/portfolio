import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      color: '#000'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    Toolbar: {
      backgroundColor: "#fff"
    }
  }));
  
  export default function ToolbarComponent() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar style={{ background: 'rgb(26, 32, 44)', color: '#fff' }} position="static">
          <Toolbar className="Toolbar">
            <Typography variant="h6" className={classes.title}>
              Portfolio
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About Me</Button>
            <Button color="inherit">Projects</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  