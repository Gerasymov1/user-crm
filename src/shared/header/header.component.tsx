import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 2,
        },
        tool: {
            display: 'flex',
            justifyContent: 'space-around'
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        button:  {
            color: 'white'
        }
    }),
);

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.tool}>
                    <Link to='/userlist'>
                        <Button className={classes.button}>User List</Button>
                    </Link>
                    <Link to='/form'>
                        <Button className={classes.button}>Form</Button>
                    </Link>
                    <Link to='/aboutus'>
                        <Button className={classes.button}>About Us</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;