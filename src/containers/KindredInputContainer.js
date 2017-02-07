import { connect } from 'react-redux';
import KindredInput from '../component/KindredInput.js';
import { selectKindred } from '../actions';

const mapStateToProps = (store) => {
 return {
  value: store.character.kindred,
  kindredlist: store.kindredlist
 };
}

const mapDispatchToProps = (dispatch) => {
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
