import { ADD_TALENT, UPDATE_TALENT, DELETE_TALENT } from '../constants/ActionTypes';

const initialState =
{
 byId : {
  1 : {
        id: 1,
        name: "Butcher"
  },
  2 : {
        id: 2,
        name: "Surgeon"
  },
  3 : {
        id: 3,
        name: "Anatomy"
  },
  4 : {
        id: 4,
        name: "Animal Husbandry"
  },
  5 : {
        id: 5,
        name: "Horsemanship or Riding"
  },
  6 : {
        id: 6,
        name: "Hunting and Tracking"
  },
  7 : {
        id: 7,
        name: "Animal Trainer"
  }
 },
 allIds : [ 1, 2, 3, 4, 5 ],
 regularIds : [ 1, 2, 3, 4, 5 ],
 rogueIds : [ 3 ]
}

export default function talentlist(state = initialState, action){
 switch (action.type) {
   case ADD_TALENT:
    let newById = [
      ...state.byId,
      action.id: {
        id: action.id,
        name: action.name
      }];
      let newAllIds =[
          ...state.allIds,
          action.id
        ];
    if (action.isRogue){
      return {
        ...state,
        byId : newById,
        allIds : newAllIds,
        rogueIds : [
            ...state.rogueIds,
            action.id
        ]
      }
    } else {
      return {
        ...state,
        byId : newById,
        allIds : newAllIds
      }
    }
   case UPDATE_TALENT:
    return state;
   case DELETE_TALENT:
    return state;
  default:
   return state;
 }
}