import { connect } from 'react-redux';
import Weight from '../component/Weight.js';
import { weightLbs } from '../util/character.js';

const mapStateToProps = (store) => {
 return {
   weight: weightLbs(store.character.weight,
       store.kindredlist.byId[store.character.kindred].weightmod)
  };
}

export default connect(mapStateToProps)(Weight);
