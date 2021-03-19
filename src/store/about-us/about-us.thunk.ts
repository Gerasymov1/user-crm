import {fetchPhotosAction, hideLoaderAction, showLoaderAction} from "./about-us.action";
import axios from "axios";
import {IPhotoModel} from "../../models/photo.model";

export const fetchMoreInfoThunk = () => {
    return async (dispatch: any) => {
        dispatch(showLoaderAction());
        try {
            const response = await axios.get<Array<IPhotoModel>>(`https://jsonplaceholder.typicode.com/photos?_limit=5`);
            dispatch(fetchPhotosAction(response.data))
            dispatch(hideLoaderAction())
        } catch (e) {
            alert('Failed to fetch photos');
            dispatch(hideLoaderAction())
        }
    }
}