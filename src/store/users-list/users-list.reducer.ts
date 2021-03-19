import {ItemListActions, addItemAction, deleteItemAction, addUserToStoreAction, editUserToStoreAction} from "./users-list.action";
import {IUser} from "../../models/user";

export interface IUsersListState {
    usersListInReducer: Array<IUser>,
    user: IUser | null
}

const initialState: IUsersListState = {
    usersListInReducer: [
        {
            firstName: 'Aleksandr',
            lastName: 'Gerasymov',
            phone: '0503334445',
            email: 'aleksandr@gmail.com',
            birthdate: '06.12.1993',
            address: 'Kharkov',
            position: 'Junior',
            id: 1
        },
        {
            firstName: 'Maria',
            lastName: 'Ivanova',
            phone: '0506664445',
            email: 'maria@gmail.com',
            birthdate: '01.12.1995',
            address: 'Kharkov',
            position: 'Middle',
            id: 2
        },
        {
            firstName: 'Maxim',
            lastName: 'Petrov',
            phone: '0507774445',
            email: 'max@gmail.com',
            birthdate: '15.02.1990',
            address: 'Kharkov',
            position: 'Senior',
            id: 3
        },
        {
            firstName: 'Anna',
            lastName: 'Sidorova',
            phone: '0677774445',
            email: 'anna@gmail.com',
            birthdate: '30.06.1999',
            address: 'Kharkov',
            position: 'Senior',
            id: 4
        },
        {
            firstName: 'Andrey',
            lastName: 'Shevchenko',
            phone: '0673338899',
            email: 'andrey@gmail.com',
            birthdate: '15.02.1990',
            address: 'Kharkov',
            position: 'Middle',
            id: 5
        }
    ],
    user: null
}

type UserListActions = ReturnType<typeof addItemAction | typeof deleteItemAction | typeof addUserToStoreAction | typeof editUserToStoreAction>;

const usersListReducer = (state = initialState, action: UserListActions) => {
    switch (action.type) {
        case ItemListActions.ADD_ITEM:
            return {
                ...state,
                usersListInReducer: [
                    ...state.usersListInReducer, action.payload
                ]
            };
        case ItemListActions.DELETE_ITEM:
            const inx = action.payload;
            const itemIndex = state.usersListInReducer.findIndex(item => item.id === inx)
            return {
                ...state,
                usersListInReducer: [
                    ...state.usersListInReducer.slice(0, itemIndex),
                    ...state.usersListInReducer.slice(itemIndex + 1)
                ]
            };
        case ItemListActions.ADD_USER_TO_STORE:
            return {
                ...state,
                user: action.payload
            };
        case ItemListActions.EDIT_USER:
            const newItem = action.payload;
            const newArr = state.usersListInReducer.map((item, i) => {
                if(newItem.id === item.id) {
                    item = newItem
                }
                return item
            })
            return  {
                ...state,
                usersListInReducer: [
                    ...newArr
                ]
            }
        default:
            return state
    }
}


export default usersListReducer