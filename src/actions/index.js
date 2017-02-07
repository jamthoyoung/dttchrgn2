import { SELECT_KINDRED } from '../constants/ActionTypes';

export const selectKindred = (id) => {
 return {
  type: SELECT_KINDRED,
  id: id 
 };
}

