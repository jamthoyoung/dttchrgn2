import { connect } from 'react-redux';
import OtherAbilities from '../component/OtherAbilities.js';

const mapStateToProps = (store) => {
  let output = [];
  let kindred = store.kindredlist.byId[store.character.kindred];
  if (kindred.hasOwnProperty("abilities")){
   let a = kindred["abilities"];
   for(let i = 0; i < a.length; i++){
    output.push(a[i]);
   }
  }
  return {
    abilities: output
  };
}

export default connect(mapStateToProps)(OtherAbilities);
