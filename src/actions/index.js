import { SELECT_KINDRED, REROLL_DICE } from '../constants/ActionTypes';

export const selectKindred = (id) => {
 return {
  type: SELECT_KINDRED,
  id: id 
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

/*
const getNewAttributeValue = (mod,taro) => {
    var dicearray = this.getMultipleDice(3,taro);
    var total = dicearray.reduce(
      function(previousValue, currentValue, currentIndex, array) {
        return previousValue + currentValue;
      });
    if(mod > 1){
      total = Math.floor(total * mod);
    } else {
      total = Math.ceil(total * mod);
    }
    console.log(dicearray + " * " + mod);
    return { value: total, specialized : false};
}


const handleRerollClick = () => {
    var wt = this.getNewAttributeValue(this.state.kindred.weightmod,false).value;
    var ht = this.getNewAttributeValue(this.state.kindred.heightmod,false).value;
    var gold = this.getNewAttributeValue(10,false).value;
    console.log("new wt + ht:" + wt + " " + ht);
    this.setState( {attributes: newattributes, weight: wt, height: ht, gold: gold } );
}
*/

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
