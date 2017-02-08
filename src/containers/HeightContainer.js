import { connect } from 'react-redux';
import Height from '../component/Height.js';

const mapStateToProps = (store) => {
 return {
  height: store.character.height,
  kindred: store.kindredlist.byId[store.character.kindred]
 };
}

export default connect(mapStateToProps)(Height);
