import { connect } from 'react-redux';
import Height from '../component/Height.js';
import { heightFeet } from '../util/character.js';

const mapStateToProps = (store) => {
 return {
  height: heightFeet(store.character.height,
      store.kindredlist.byId[store.character.kindred].heightmod)
 };
}

export default connect(mapStateToProps)(Height);
