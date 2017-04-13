import { ADD_TALENT, UPDATE_TALENT, DELETE_TALENT } from '../constants/ActionTypes';

const initialState =
{
 byId : {
  1 : {
        id: 1,
        group: 1,
        name: "Butcher"
  },
  2 : {
        id: 2,
        group: 1,
        name: "Surgeon"
  },
  3 : {
        id: 3,
        group: 1,
        name: "Specific Anatomy"
  },
  4 : {
        id: 4,
        group: 2,
        name: "Animal Husbandry"
  },
  5 : {
        id: 5,
        group: 2,
        name: "Horsemanship or Riding"
  },
  6 : {
        id: 6,
        group: 2,
        name: "Hunting and Tracking"
  },
  7 : {
        id: 7,
        group: 2,
        name: "Training"
  },
  8 : {
        id: 8,
        group: 3,
        name: "Actor"
  },
  9 : {
        id: 9,
        group: 3,
        name: "Painter"
  },
  10 : {
        id: 10,
        group: 3,
        name: "Sculptor"
  },
  11 : {
        id: 11,
        group: 3,
        name: "Calligrapher"
  },
  12 : {
        id: 12,
        group: 3,
        name: "Scribe"
  },
  13 : {
        id: 13,
        group: 3,
        name: "Jewelry maker"
  },
  14 : {
        id: 14,
        group: 3,
        name: "Leather worker"
  },
  15 : {
        id: 15,
        group: 3,
        name: "Musician"
  },
  16 : {
        id: 16,
        group: 3,
        name: "Potter and ceramicist"
  },
  17 : {
        id: 17,
        group: 3,
        name: "Singer"
  },
  18 : {
        id: 18,
        group: 3,
        name: "Bard"
  },
  19 : {
        id: 19,
        group: 4,
        name: "Contortionist"
  }
 },
 groups: {
   1: {
     id: 1,
     talentIds: [1,2,3],
     name: "Anatomy"
   },
   2: {
     id: 2,
     talentIds: [4,5,6,7],
     name: "Animal Knowledge"
   },
   3: {
     id: 3,
     talentIds: [8,9,10,11,12,13,14,15,16,17,18],
     name: "Artisan"
   },
   4: {
     id: 4,
     talentIds: [19],
     name: "Athlete"
   },
 },
 allGroups: [ 1, 2, 3, 4],
 allIds : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ],
 regularIds : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ],
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
