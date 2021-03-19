import React from 'react'
import {useSelector} from "react-redux";
import {IRootStore} from "../../store/store";
import {makeStyles} from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {CardMedia} from "@material-ui/core";
import Card from "@material-ui/core/Card";

const ItemBodyAboutUs: React.FC = () => {
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
    const classes = useStyles();


    const aboutUsListReducer: any = useSelector((reduxStoreWithAllReducers: IRootStore) => reduxStoreWithAllReducers.aboutUsListReducer);
    return (
        <>
            <Card className={classes.root}>
                <CardContent className={classes.bullet}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {aboutUsListReducer.photoItem.title}
                    </Typography>
                    <CardMedia
                        className={classes.media}
                        image={aboutUsListReducer.photoItem.url}
                    />
                </CardContent>
            </Card>
        </>
    )
}

export default ItemBodyAboutUs