import { SELECT_TALENTS, SELECT_KINDRED, REROLL_DICE, UPDATE_NAME, SELECT_GENDER, SELECT_CLASS } from '../constants/ActionTypes';

export const selectKindred = (id) => {
 return {
  type: SELECT_KINDRED,
  id: id 
 };
}

export const selectTalents = (payload) => {
 return {
  type: SELECT_TALENTS,
  payload: payload
 };
}

export const selectClass = (c) => {
 return {
  type: SELECT_CLASS,
  class: c
 };
}

export const updateName = (name) => {
 return {
  type: UPDATE_NAME,
  name: name
 };
}

export const selectGender = (gender) => {
 return {
  type: SELECT_GENDER,
  gender: gender
 };
}
const rollOneDice = () => {
  return Math.ceil(Math.random() * 6);
}

const getMultipleDice = (numberofdice, taro) => {
    var dicearray = [];
    var i = 0;
    while(i < numberofdice){
      dicearray.push(rollOneDice());
      i += 1;
    }
    if (taro){
      var firstvalue = dicearray[0];
      var issame = true;
      for(var x = 1; x < numberofdice; x++){
        if(firstvalue !== dicearray[x]){
          issame = false;
        }
      }
      if(issame){
        dicearray = dicearray.concat(getMultipleDice(numberofdice,true));
      }
    }
    return dicearray;
}

export const rerollDice = () => {
 return {
  type: REROLL_DICE,
  attributes :  {
   str : getMultipleDice(3,true),
   con : getMultipleDice(3,true),
   dex : getMultipleDice(3,true),
   spd : getMultipleDice(3,true),
   lk : getMultipleDice(3,true),
   iq : getMultipleDice(3,true),
   wiz : getMultipleDice(3,true),
   chr : getMultipleDice(3,true)
  },
  height : getMultipleDice(3,false).reduce((p,c) => p+c),
  weight : getMultipleDice(3,false).reduce((p,c) => p+c),
  gold : getMultipleDice(3,false).reduce((p,c) => p+c) * 10

 };
}
