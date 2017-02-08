import { connect } from 'react-redux';
import Weight from '../component/Weight.js';

const mapStateToProps = (store) => {
 return {
  weight: store.character.weight,
  height: store.character.height,
  kindred: store.kindredlist.byId[store.character.kindred]
 };
}

export default connect(mapStateToProps)(Weight);
