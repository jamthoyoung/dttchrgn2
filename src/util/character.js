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
