import { connect } from 'react-redux';
import AttributeBox from '../component/AttributeBox.js';

const mapStateToProps = function(store) {
 return {
  attr: store.character.attributes,
  kindred: store.character.kindred
 };
}

export default connect(mapStateToProps)(AttributeBox);
