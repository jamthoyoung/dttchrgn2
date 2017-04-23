import { connect } from 'react-redux';
import PrintScreen from '../component/PrintScreen.js';
import { weightLbs, heightFeet, getLevel, attrvalue, getPersonalAdds } from '../util/character.js';

const getErrors = (store) => {
  let errors = [];
  let requiredTalents = store.character.class === "Rogue" ? 2 : 1;
  if(store.character.talents.length !== requiredTalents){
    errors.push("Please select " + requiredTalents + " talent(s). You have only selected " + store.character.talents.length + ".")
  }
  return errors;
}

const getTalentNames = (store) => {
  let names = [];
  for (let i = 0; i < store.character.talents.length; i++){
    names.push(store.talentlist.byId[store.character.talents[i]].name);
  }
  for (let i = 0; i < store.character.rogueTalents.length; i++){
    names.push(store.talentlist.byId[store.character.rogueTalents[i]].name);
  }
  return names;
}

const mapStateToProps = (store) => {
 return {
  errors: getErrors(store),
  character: store.character,
  height: heightFeet(store.character.height,
      store.kindredlist.byId[store.character.kindred].heightmod),
  weight: weightLbs(store.character.weight,
          store.kindredlist.byId[store.character.kindred].weightmod),
  level: getLevel(store.character.attributes, store.kindredlist.byId[store.character.kindred]),
  str: attrvalue(store.character.attributes.str, store.kindredlist.byId[store.character.kindred].strmod),
  isStrSpecialized: (store.character.attributes.str.length > 3),
  con: attrvalue(store.character.attributes.con, store.kindredlist.byId[store.character.kindred].conmod),
  isConSpecialized: (store.character.attributes.con.length > 3),
  dex: attrvalue(store.character.attributes.dex, store.kindredlist.byId[store.character.kindred].dexmod),
  isDexSpecialized: (store.character.attributes.dex.length > 3),
  spd: attrvalue(store.character.attributes.spd, store.kindredlist.byId[store.character.kindred].spdmod),
  isSpdSpecialized: (store.character.attributes.spd.length > 3),
  lk: attrvalue(store.character.attributes.lk, store.kindredlist.byId[store.character.kindred].lkmod),
  isLkSpecialized: (store.character.attributes.lk.length > 3),
  iq: attrvalue(store.character.attributes.iq, store.kindredlist.byId[store.character.kindred].iqmod),
  isIqSpecialized: (store.character.attributes.iq.length > 3),
  wiz: attrvalue(store.character.attributes.wiz, store.kindredlist.byId[store.character.kindred].wizmod),
  isWizSpecialized: (store.character.attributes.wiz.length > 3),
  chr: attrvalue(store.character.attributes.chr, store.kindredlist.byId[store.character.kindred].chrmod),
  isChrSpecialized: (store.character.attributes.chr.length > 3),
  kindred: store.kindredlist.byId[store.character.kindred],
  talents: getTalentNames(store),
  personalAdds: getPersonalAdds(store.character.attributes,store.kindredlist.byId[store.character.kindred])
 };
}

export default connect(mapStateToProps)(PrintScreen);
