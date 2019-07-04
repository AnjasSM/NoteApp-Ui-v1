import axios from 'axios'; //import axios to get data from api
import {
    GET_CATEGORIES,
    ADD_CATEGORIES,
    UPDATE_CATEGORIES,
    DELETE_CATEGORIES
} from './types'; // import type from actionType to avoid TYPO

//export action that get categories
export const getCategories = () => {
    return {
        type: GET_CATEGORIES,
        payload: axios.get( urlCategories )
    }
};

//export action that add categories
export const addCategories = ( data ) => {
    return {
        type: ADD_CATEGORIES,
        payload: axios.post( urlCategories, data )
    }
};

//export action that update categories
export const updateCategories = ( id, data) => {
    return {
        type: UPDATE_CATEGORIES,
        payload: axios.patch( `${urlCategories}/${id}`, data)
    }
};

//export action that delete categories
export const deleteCategories = ( id ) => {
    return {
        type: DELETE_CATEGORIES,
        payload: axios.delete( `${urlCategories}/${id}` )
    }
}