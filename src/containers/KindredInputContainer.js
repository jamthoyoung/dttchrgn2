import { connect } from 'react-redux';
import KindredInput from '../component/KindredInput.js';
import { selectKindred } from '../actions';

const mapStateToProps = function(store) {
 return {
  value: store.character.kindred.id,
  kindredlist: store.kindredlist
 };
}

const mapDispatchToProps = function(dispatch) {
 return {
  onChange: (id) => {
   dispatch(selectKindred(id));
  }
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KindredInput);
