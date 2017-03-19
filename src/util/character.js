var sumofarray = (previousValue, currentValue) => {
   return previousValue + currentValue;
};

var multiplier = function(org, mod){
  if(mod > 1){
    return Math.floor(org * mod);
  } else {
    return Math.ceil(org * mod);
  }
};
 var kinmod = (array, mod) => {
   var org = array.reduce(sumofarray);
   return multiplier(org, mod);
 };
export const getLevel = (attr, kindred) => {
  return Math.floor(
    Math.max(
      kinmod(attr.str, kindred.strmod),
      kinmod(attr.con, kindred.conmod),
      kinmod(attr.dex, kindred.dexmod),
      kinmod(attr.spd, kindred.spdmod),
      kinmod(attr.lk, kindred.lkmod),
      kinmod(attr.iq, kindred.iqmod),
      kinmod(attr.wiz, kindred.wizmod),
      kinmod(attr.chr, kindred.chrmod)
    ) / 10
  );
}
export const attrvalue = (attr, mod) => {
  return kinmod(attr, mod);
}
export const getPersonalAdds = (attr, kindred) => {
  var strtotal = multiplier(attr.str.reduce(sumofarray),kindred.strmod);
  var dextotal = multiplier(attr.dex.reduce(sumofarray),kindred.dexmod);
  var spdtotal = multiplier(attr.spd.reduce(sumofarray),kindred.spdmod);
  var lktotal = multiplier(attr.lk.reduce(sumofarray),kindred.lkmod);
  return Math.max(0,strtotal-12)+
      Math.max(0,dextotal-12)+
      Math.max(0,spdtotal-12)+
      Math.max(0,lktotal-12);
}
export const heightFeet = (hwAttr, kinmod) => {
  let startInches = 52;
  let incrementArray = [3,3,3,2,2,2,1,1,1,2,2,2,2,3,3,3];
  let inchesIncremented = incrementArray.slice(0,hwAttr-3).reduce((a,b) => a+b, 0);
  let total = startInches + inchesIncremented;
  total =  multiplier(total,kinmod);
  let result = "";
  let feet = Math.floor(total / 12);
  if (feet > 0){
    result = feet + '\'';
  }
  let inches = Math.floor(total % 12);
  if (inches > 0) {
    result = result + inches + '"';
  }
  return result;
}
export const weightLbs = (wtAttr, kinmod) => {
  let startLbs = 60;
  let incrementArray = [15,20,15,15,10,15,5,5,5,15,10,10,20,20,15];
  let lbsIncremented = incrementArray.slice(0,wtAttr-3).reduce((a,b) => a+b, 0);
  let total = startLbs + lbsIncremented;
  total =  multiplier(total,kinmod);
  let result = total + 'lbs';
  return result;
}
