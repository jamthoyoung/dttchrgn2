var sumofarray = (previousValue, currentValue) => {
   return previousValue + currentValue;
};

 var kinmod = (array, mod) => {
   var org = array.reduce(sumofarray);
   if(mod > 1){
     return Math.floor(org * mod);
   } else {
     return Math.ceil(org * mod);
   }
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
