import { connect } from 'react-redux';
import PrintScreen from '../component/PrintScreen.js';
import { getLevel, attrvalue, getPersonalAdds } from '../util/character.js';

const mapStateToProps = (store) => {
 return {
  charname: store.character.name,
  level: getLevel(store.character.attributes, store.kindredlist.byId[store.character.kindred]),
  str: attrvalue(store.character.attributes.str, store.kindredlist.byId[store.character.kindred].strmod),
  con: attrvalue(store.character.attributes.con, store.kindredlist.byId[store.character.kindred].conmod),
  dex: attrvalue(store.character.attributes.dex, store.kindredlist.byId[store.character.kindred].dexmod),
  spd: attrvalue(store.character.attributes.spd, store.kindredlist.byId[store.character.kindred].spdmod),
  lk: attrvalue(store.character.attributes.lk, store.kindredlist.byId[store.character.kindred].lkmod),
  iq: attrvalue(store.character.attributes.iq, store.kindredlist.byId[store.character.kindred].iqmod),
  wiz: attrvalue(store.character.attributes.wiz, store.kindredlist.byId[store.character.kindred].wizmod),
  chr: attrvalue(store.character.attributes.chr, store.kindredlist.byId[store.character.kindred].chrmod),
  kindred: store.kindredlist.byId[store.character.kindred],
  personalAdds: getPersonalAdds(store.character.attributes,store.kindredlist.byId[store.character.kindred])
 };
}

export default connect(mapStateToProps)(PrintScreen);
