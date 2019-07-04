import {
    GET_NOTES_PENDING,
    GET_NOTES_REJECTED,
    GET_NOTES_FULFILLED,
    ADD_NOTES_PENDING,
    ADD_NOTES_REJECTED,
    ADD_NOTES_FULFILLED,
    UPDATE_NOTES_PENDING,
    UPDATE_NOTES_REJECTED,
    UPDATE_NOTES_FULFILLED,
    DELETE_NOTES_PENDING,
    DELETE_NOTES_REJECTED,
    DELETE_NOTES_FULFILLED,
    GET_CATEGORIES_PENDING,
    GET_CATEGORIES_REJECTED,
    GET_CATEGORIES_FULFILLED,
    ADD_CATEGORIES_PENDING,
    ADD_CATEGORIES_REJECTED,
    ADD_CATEGORIES_FULFILLED,
    UPDATE_CATEGORIES_PENDING,
    UPDATE_CATEGORIES_REJECTED,
    UPDATE_CATEGORIES_FULFILLED,
    DELETE_CATEGORIES_PENDING,
    DELETE_CATEGORIES_REJECTED,
    DELETE_CATEGORIES_FULFILLED
} from '../actions/types';

const initialState = {
    limit: 10,
    data: [],
    category: [],
    isLoading: false,
    isError: false
}; // declare initialstate

// create a reducer for getting network from RESTful API
export default notes = ( state = initialState, action ) => {
    switch(action.type) {
        case GET_NOTES_PENDING :
        case ADD_NOTES_PENDING :
        case UPDATE_NOTES_PENDING :
        case DELETE_NOTES_PENDING :
        case GET_CATEGORIES_PENDING :
        case ADD_CATEGORIES_PENDING :
        case UPDATE_CATEGORIES_PENDING :
        case DELETE_CATEGORIES_PENDING :
            return {
                isLoading: true
            }
        case GET_NOTES_REJECTED :
        case ADD_NOTES_REJECTED :
        case UPDATE_NOTES_REJECTED :
        case DELETE_NOTES_REJECTED :
        case GET_CATEGORIES_REJECTED :
        case ADD_CATEGORIES_REJECTED :
        case UPDATE_CATEGORIES_REJECTED :
        case DELETE_CATEGORIES_REJECTED :
            return {
                isLoading: true,
                isError: true
            }
        case GET_NOTES_FULFILLED :
            return {
                isLoading: false,
                isError: false,
                data: action.payload.data,
            }
        case ADD_NOTES_FULFILLED :
            return {

            }
        case UPDATE_NOTES_FULFILLED :
            return {

            }
        case DELETE_NOTES_FULFILLED :
            return {

            }
        case GET_CATEGORIES_FULFILLED :
            return {

            }
        case ADD_CATEGORIES_FULFILLED :
            return {

            }
        case UPDATE_CATEGORIES_FULFILLED :
            return {
                
            }
        case DELETE_CATEGORIES_FULFILLED :
            return {
                
            }
        default:
            return state;
    }
}