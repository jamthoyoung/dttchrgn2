import { connect } from 'react-redux';
import Gender from '../component/Gender.js';
import { selectGender } from '../actions';

const mapStateToProps = (store) => {
 return {
  gender: store.character.gender,
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  onChange: (val) => {
   dispatch(selectGender(val));
  }
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gender);
