import as types from '../constants/ActionTypes';

export function selectKindred(kindred) {
 return {
  type: types.SELECT_KINDRED,
  kindred
 };
}

