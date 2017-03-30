import { connect } from 'react-redux';
import Age from '../component/Hair.js';
import { updateHair } from '../actions';

const mapStateToProps = (store) => {
 return {
  name: store.character.hair
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  onChange: (hair) => {
   dispatch(updateHair(hair));
  }
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hair);
