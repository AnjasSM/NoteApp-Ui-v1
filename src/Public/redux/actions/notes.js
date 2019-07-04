import axios from axios; //import axios to get data from api
import { 
    GET_NOTES,
    ADD_NOTES,
    UPDATE_NOTES,
    DELETE_NOTES,
} from './types' // import type from actionType to avoid TYPO

const urlNotes = 'https//192.168.6.178:4000/notes'; // url to get notes from api
const urlCategories = 'https//192.168.6.178:4000/categories'; // url to get categories from api
let search = '';
let sort = 'DESC';
let limit = 10

//export action that get notes
export const getNotes = (search,sort,limit) => {
    return {
        type: GET_NOTES,
        payload: axios.get(`${urlNotes}?search=${search}&sort=${sort}&limit=${limit}`)
    }
};

//export action that add note
export const addNotes = ( data ) => {
    return {
        type: ADD_NOTES,
        payload: axios.post(urlNotes, data)
    }
};

//export action that update note
export const updateNotes = ( id, data ) => {
    return {
        type: UPDATE_NOTES,
        payload: axios.patch(`${urlNotes}/${id}`, data)
    }
};

//export action that delete note
export const deleteNotes = ( id ) => {
    return {
        type: DELETE_NOTES,
        payload: axios.delete(`${urlNotes}/${id}`)
    }
};