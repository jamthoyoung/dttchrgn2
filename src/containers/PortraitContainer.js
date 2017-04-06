import { connect } from 'react-redux';
import Portrait from '../component/Portrait.js';
import { updateBase64Portrait } from '../actions';

const mapStateToProps = (store) => {
 return {
  base64Portrait: store.character.base64Portrait
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  updateBase64Portrait: (age) => {
   dispatch(updateBase64Portrait(age));
  }
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portrait);
