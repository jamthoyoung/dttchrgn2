import { SELECT_TALENTS, SELECT_ROGUE_TALENTS, SELECT_KINDRED, REROLL_DICE, UPDATE_AGE, UPDATE_HAIR, UPDATE_NAME,
  UPDATE_BASE64_PORTRAIT, SELECT_GENDER, SELECT_CLASS } from '../constants/ActionTypes';

const initialState =
{
  "name" : "",
  "gender" : "Male",
  "kindred": 1,
  "base64Portrait": null,
  "backstory":{
    "id":0,
    "name":"None"
  },
  "talents":[ 1 ],
  "rogueTalents":[ ],
  "attributes" : {
    str : [ -1, 0, 1 ],
    con : [ -1, 0, 1 ],
    dex : [ -1, 0, 1 ],
    spd : [ -1, 0, 1 ],
    lk : [ -1, 0, 1 ],
    iq : [ -1, 0, 1 ],
    wiz : [ -1, 0, 1 ],
    chr : [ -1, 0, 1 ]
  },
  class: "Warrior",
  height: 3,
  weight: 3,
  age: "",
  hair: "",
  gold: 0,
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
  console.log('in character reducer with action: ' + action.type);
 switch (action.type) {
  case SELECT_KINDRED:
   return {
     ...state,
     kindred: action.id
   }
  case SELECT_TALENTS:
    return {
      ...state,
      talents: action.payload
    }
  case SELECT_ROGUE_TALENTS:
     return {
       ...state,
       rogueTalents: action.payload
     }
  case SELECT_CLASS:
   return {
     ...state,
     class: action.class,
     rogueTalents: []
   }
  case UPDATE_AGE:
    return {
      ...state,
      age: action.age
    }
  case UPDATE_HAIR:
    return {
     ...state,
     hair: action.hair
    }
  case UPDATE_NAME:
    return {
      ...state,
      name: action.name
    }
  case UPDATE_BASE64_PORTRAIT:
    return {
      ...state,
      base64Portrait: action.base64Portrait
    }
  case SELECT_GENDER:
   return {
     ...state,
     gender: action.gender
   }
  case REROLL_DICE:
   return {
     ...state,
     attributes: action.attributes,
     weight: action.weight,
     height: action.height,
     gold: action.gold
   }
  default:
   return state;
 }
}
