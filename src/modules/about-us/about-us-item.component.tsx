import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {CardMedia} from "@material-ui/core";
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: '#8a8787',
    },
    bullet: {
        display: 'flex',
        margin: '0 2px',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: '170px',
        width:  '250px',
    },

});



const ItemAboutUs = ({title, url}: any) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={classes.bullet}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {title}
                </Typography>
                <CardMedia
                    className={classes.media}
                    image={url}
                />
            </CardContent>
        </Card>
    )
}

export default ItemAboutUs