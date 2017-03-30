import { connect } from 'react-redux';
import Hair from '../component/Hair.js';
import { updateHair } from '../actions';

const mapStateToProps = (store) => {
 return {
  hair: store.character.hair
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
