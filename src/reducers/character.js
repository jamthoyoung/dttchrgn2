import { SELECT_KINDRED } from '../constants/ActionTypes';

const initialState = 
{
  "name" : "Enter name",
  "gender" : "Male",
  "kindred": 4,
  "backstory":{
    "id":0,
    "name":"None"
  },
  "talents":[],
  "attributes" : {
    str : [ 1, 1, 2 ],
    con : [ 1, 1, 2 ],
    dex : [ 1, 1, 2 ],
    spd : [ 1, 1, 2 ],
    lk : [ 1, 1, 2 ],
    iq : [ 1, 1, 2 ],
    wiz : [ 1, 1, 2 ],
    chr : [ 1, 1, 2 ]
  },
  class: "Warrior",
  height: 11,
  weight: 12,
  gold: 30,
  equipment : [
    { name: "Short Sword",
      damagedice: 3,
      damageadds: 0,
      weight: 25,
      active: true
    },
    { name: "Sheild",
      armourpts: 1,
      weight: 30,
      active: true
    },
    { name: "Mace",
      damagedice: 3,
      damageadds: 0,
      weight: 25,
      active: false
    } 
  ]
};

export default function character(state = initialState, action){
 switch (action.type) {
  case SELECT_KINDRED:
   return {
     ...state,
     kindred: action.id
   }
  default:
   return state;
 }
}
