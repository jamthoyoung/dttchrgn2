import { connect } from 'react-redux';
import Name from '../component/Name.js';
import { updateName } from '../actions';

const mapStateToProps = (store) => {
 return {
  name: store.character.name
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  onChange: (name) => {
   dispatch(updateName(name));
  }
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Name);
