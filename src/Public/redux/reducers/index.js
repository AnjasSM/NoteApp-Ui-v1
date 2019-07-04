import { combineReducers } from 'redux';
import categories from './categories';
import notes from './notes';

const appReducers = combineReducers({
    notes, categories
});

export default appReducers;
