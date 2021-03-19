import {createAction} from "redux-actions";
import {IUser} from "../../models/user";

export enum ItemListActions {
    ADD_ITEM = 'ADD_ITEM',
    DELETE_ITEM = 'DELETE_ITEM',
    ADD_USER_TO_STORE = 'ADD_USER_TO_STORE',
    EDIT_USER = 'EDIT_USER'
}


export const addItemAction = createAction(ItemListActions.ADD_ITEM, (payload: any) => payload);
export const deleteItemAction = createAction(ItemListActions.DELETE_ITEM, (payload: any) => payload);
export const addUserToStoreAction = createAction(ItemListActions.ADD_USER_TO_STORE, (payload: IUser | null) => payload)
export const editUserToStoreAction = createAction(ItemListActions.EDIT_USER, (payload: IUser | null) => payload)
