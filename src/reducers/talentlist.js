import { ADD_TALENT, UPDATE_TALENT, DELETE_TALENT } from '../constants/ActionTypes';

const initialState =
{
 byId : {
  1 : {
        id: 1,
        group: "Anatomy",
        name: "Butcher"
  },
  2 : {
        id: 2,
        group: "Anatomy",
        name: "Surgeon"
  },
  3 : {
        id: 3,
        group: "Anatomy",
        name: "Specific Anatomy"
  },
  4 : {
        id: 4,
        group: "Animal Knowledge",
        name: "Animal Husbandry"
  },
  5 : {
        id: 5,
        group: "Animal Knowledge",
        name: "Horsemanship or Riding"
  },
  6 : {
        id: 6,
        group: "Animal Knowledge",
        name: "Hunting and Tracking"
  },
  7 : {
        id: 7,
        group: "Animal Knowledge",
        name: "Training"
  },
  8 : {
        id: 8,
        group: "Artisan",
        name: "Actor"
  },
  9 : {
        id: 9,
        group: "Artisan",
        name: "Painter"
  },
  10 : {
        id: 10,
        group: "Artisan",
        name: "Sculptor"
  },
  11 : {
        id: 11,
        group: "Artisan",
        name: "Calligrapher"
  },
  12 : {
        id: 12,
        group: "Artisan",
        name: "Scribe"
  },
  13 : {
        id: 13,
        group: "Artisan",
        name: "Jewelry maker"
  },
  14 : {
        id: 14,
        group: "Artisan",
        name: "Leather worker"
  },
  15 : {
        id: 15,
        group: "Artisan",
        name: "Musician"
  },
  16 : {
        id: 16,
        group: "Artisan",
        name: "Potter and ceramicist"
  },
  17 : {
        id: 17,
        group: "Artisan",
        name: "Singer"
  },
  18 : {
        id: 18,
        group: "Artisan",
        name: "Bard"
  },
  19 : {
        id: 19,
        group: "Athlete",
        name: "Contortionist"
  }
 },
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
