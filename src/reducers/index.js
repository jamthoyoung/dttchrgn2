import { combineReducers } from 'redux';
import character from './character';
import kindredlist from './kindredlist';
import talentlist from './talentlist';

const characterApp = combineReducers({
 character,
 kindredlist,
 talentlist
});

export default characterApp;
