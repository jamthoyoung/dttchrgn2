import { connect } from 'react-redux';
import AttributeBox from '../component/AttributeBox.js';

const mapStateToProps = (store) => {
 return {
  attr: store.character.attributes,
  kindred: store.kindredlist.byId[store.character.kindred]
 };
}

export default connect(mapStateToProps)(AttributeBox);
