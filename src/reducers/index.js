import { combineReducers } from 'redux';
import character from './character';
import kindredlist from './kindredlist';

const characterApp = combineReducers({
 character,
 kindredlist
});

export default characterApp;
