import {createAction} from "redux-actions";
import {IPhotoModel} from "../../models/photo.model";


// TODO rename actions START/FINISHED/FAILED
export enum AboutUsActions {
    FETCH_PHOTOS = 'FETCH_PHOTOS',
    SHOW_LOADER = 'SHOW_LOADER',
    HIDE_LOADER = 'HIDE_LOADER',
    GET_USER_FOR_BODY_PAGE = 'GET_USER_FOR_BODY_PAGE'
}

export const fetchPhotosAction = createAction(AboutUsActions.FETCH_PHOTOS, (payload: Array<IPhotoModel>) => payload);
export const showLoaderAction = createAction(AboutUsActions.SHOW_LOADER, (payload: void) => payload);
export const hideLoaderAction = createAction(AboutUsActions.HIDE_LOADER, (payload: void) => payload);
export const getUserForBodyPageAction = createAction(AboutUsActions.GET_USER_FOR_BODY_PAGE, (payload: IPhotoModel | object) => payload);
