import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import {IUser} from "../../../../models/user";

const styles = makeStyles( {
    icons: {
        cursor: 'pointer'
    }
})

interface IUsersList {
    users: Array<IUser>,
    onDelete: (user: IUser) => void,
    onEdit: (user: IUser) => void;
}


const UserListTable: React.FC<IUsersList> = ({users, onDelete, onEdit}) => {
    const usersArray: IUser[] = users
    const classes = styles();
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">First name</TableCell>
                        <TableCell align="right">Last name</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Birthdate</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Position</TableCell>
                        <TableCell align="right">Edit</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usersArray.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell align="right">{user.id}</TableCell>
                            <TableCell align="right">
                                {user.firstName}
                            </TableCell>
                            <TableCell align="right">{user.lastName}</TableCell>
                            <TableCell align="right">{user.phone}</TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            <TableCell align="right">{user.birthdate}</TableCell>
                            <TableCell align="right">{user.address}</TableCell>
                            <TableCell align="right">{user.position}</TableCell>
                            <TableCell align="right">
                                <Icon className={classes.icons}
                                      onClick={() => onEdit(user)}
                                >
                                    edit
                                </Icon>
                            </TableCell>
                            <TableCell align="right">
                                <Icon
                                    className={classes.icons}
                                    onClick={() => onDelete(user)}
                                >
                                    delete
                                </Icon>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UserListTable;
