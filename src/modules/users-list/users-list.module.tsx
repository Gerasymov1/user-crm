import UserListTable from "./components/users-list-table/users-list-table.component";
import ConfirmModalComponent from "../../shared/confirm-modal/confirm-modal.component";
import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import {IUser} from "../../models/user";
import {useDispatch, useSelector} from "react-redux";
import {IRootStore} from "../../store/store";
import {deleteItemAction, addUserToStoreAction} from "../../store/users-list/users-list.action";
import {useHistory} from "react-router";

const UsersListModule = () => {

    // From Redux Store
    const usersListReducer = useSelector((reduxStoreWithAllReducers: IRootStore) => reduxStoreWithAllReducers.usersListReducer);

    // Local State
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
    const [userToDelete, setUserToDelete] = useState<IUser | null>(null);
    const [editUser, setEditUser] = useState<IUser | null>(null);

    const dispatch = useDispatch()
    const history = useHistory()

    const onCloseModal = useCallback(() => {
        setUserToDelete(null);
        setIsConfirmModalOpen(false);
    }, []);

    const onDelete = useCallback((user: IUser) => {
        setUserToDelete(user);
        setIsConfirmModalOpen(true);
    }, []);

    const onEdit = useCallback((user: IUser) => {
        setEditUser(user)
        dispatch(addUserToStoreAction(user))
        history.push('/form')
    },[dispatch, history])

    const onConfirm = useCallback(() => {
        console.log('user to DELETE', userToDelete);
        dispatch(deleteItemAction(userToDelete?.id))
        setIsConfirmModalOpen(false)
    }, [userToDelete, dispatch]);


    return (
        <>
            <UserListTable
                users={usersListReducer.usersListInReducer}
                onDelete={onDelete}
                onEdit={onEdit}
            />
            <ConfirmModalComponent
                open={isConfirmModalOpen}
                onClose={onCloseModal}
                onConfirm={onConfirm}
                text={`You want to delete user ${userToDelete?.lastName}`}
            />
            <div className='add-button'>
                <Link to='/form'>
                    <Button variant="contained" color="primary">
                        Add new user
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default UsersListModule;