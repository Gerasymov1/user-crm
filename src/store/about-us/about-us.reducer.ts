import {IPhotoModel} from "../../models/photo.model";
import {AboutUsActions, fetchPhotosAction, hideLoaderAction, showLoaderAction, getUserForBodyPageAction} from './about-us.action';

export interface IAboutUsListState {
    aboutUsPhotosList: Array<IPhotoModel>,
    loading: boolean,
    photoItem: IPhotoModel | object
}

const initialState: IAboutUsListState = {
    aboutUsPhotosList: [],
    loading: false,
    photoItem: {}
}

type AboutUsActionsType = ReturnType<typeof fetchPhotosAction | typeof showLoaderAction | typeof hideLoaderAction | typeof getUserForBodyPageAction>

const aboutUsListReducer = (state = initialState, action: AboutUsActionsType) => {
    switch (action.type) {
        case AboutUsActions.FETCH_PHOTOS:
            return {
                ...state,
                aboutUsPhotosList: action.payload
            };
        case AboutUsActions.SHOW_LOADER:
            return {
                ...state,
                loading: true
            };
        case AboutUsActions.HIDE_LOADER:
            return {
                ...state,
                loading: false
            };
        case AboutUsActions.GET_USER_FOR_BODY_PAGE:
            return {
                ...state,
                photoItem: {...action.payload}
            };
        default:
            return state

    }
}

export default aboutUsListReducer
