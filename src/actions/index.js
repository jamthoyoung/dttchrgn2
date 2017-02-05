import types from '../constants/ActionTypes';

export function selectKindred(id) {
 return {
  type: types.SELECT_KINDRED,
  id: id 
 };
}

