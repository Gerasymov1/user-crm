import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {IRootStore} from "../../store/store";
import {addItemAction, addUserToStoreAction, editUserToStoreAction} from "../../store/users-list/users-list.action";
import {useHistory} from "react-router";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'lightgray',
            padding: '20px'
        },
        form: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '500px',
            backgroundColor: 'darkgray',
            padding: '30px'
        },
        field: {
            margin: "10px"
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px'
        }
    })
);

const Form: React.FC = () => {
    const classes = useStyles();
    const editUser = useSelector((reduxStoreWithAllReducers: IRootStore) => reduxStoreWithAllReducers.usersListReducer.user);
    const dispatch = useDispatch();
    const history = useHistory()

    // TODO add form type
    const [user, setUser] = useState<any>(editUser ? editUser : null);

    const handleChange = (event: any) => {
        const target = event.target;
        const value = target.value;
        const name = target.id;
        if(editUser) {
            setUser({
                    ...user,
                    [name]: value
            })
        } else {
            setUser( {
                ...user,
                id: Date.now(),
                [name]: value
            })
        }

    }

    const submitForm = () => {
        if(editUser) {
            dispatch(editUserToStoreAction(user))
            dispatch(addUserToStoreAction(null))
        } else {
            dispatch(addItemAction(user))
            dispatch(addUserToStoreAction(null))
        }
        history.push('/userlist')
    }

    return (
        <div className={classes.container}>
            <form onSubmit={submitForm} className={classes.form} >
                <TextField className={classes.field} value={user?.firstName || ''} onChange={handleChange} id="firstName" label="First Name" variant="filled"/>
                <TextField className={classes.field} value={user?.lastName || ''} onChange={handleChange} id="lastName" label="Last Name" variant="filled"/>
                <TextField className={classes.field} value={user?.phone || ''} onChange={handleChange} id="phone" label="Phone" variant="filled"/>
                <TextField className={classes.field} value={user?.email || ''} onChange={handleChange} id="email" label="Email" variant="filled"/>
                <TextField className={classes.field} value={user?.birthdate || ''} onChange={handleChange} id="birthdate" label="Birthdate" variant="filled"/>
                <TextField className={classes.field} value={user?.address || ''} onChange={handleChange} id="address" label="Address" variant="filled"/>
                <TextField className={classes.field} value={user?.position || ''} onChange={handleChange} id="position" label="Position" variant="filled"/>
                <div className={classes.buttonContainer}>
                    <Button type='reset' variant="contained" color="secondary">Cancel</Button>
                    <Button type='submit' variant="contained" color="primary" >Create</Button>
                </div>
            </form>
        </div>
    )
}

export default Form
