import { connect } from 'react-redux';
import PersonalAdds from '../component/PersonalAdds.js';

const mapStateToProps = (store) => {
  var sumofarray = function(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
  };
  var multiplier = function(org, mod){
    if(mod > 1){
      return Math.floor(org * mod);
    } else {
      return Math.ceil(org * mod);
    }
  };
  var strtotal = multiplier(store.character.attributes.str.reduce(sumofarray),
                             store.kindredlist.byId[store.character.kindred].strmod);
  var dextotal = multiplier(store.character.attributes.dex.reduce(sumofarray),
                             store.kindredlist.byId[store.character.kindred].dexmod);
  var spdtotal = multiplier(store.character.attributes.spd.reduce(sumofarray),
                             store.kindredlist.byId[store.character.kindred].spdmod);
  var lktotal = multiplier(store.character.attributes.lk.reduce(sumofarray),
                             store.kindredlist.byId[store.character.kindred].lkmod);
 return {
  personalAdds: Math.max(0,strtotal-12)+
      Math.max(0,dextotal-12)+
      Math.max(0,spdtotal-12)+
      Math.max(0,lktotal-12)
 };
}

export default connect(mapStateToProps)(PersonalAdds);
